<template>
  <div>
    <div v-for="(comment, idx) in comments" :key="idx">
      {{comment.content}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Comment',
  props: {
    articleId: {
      type: Number
    }
  },
  data: function(){
    return{
      comments:[],
    }
  },
  methods:{
    getComment: function(){
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/v1/articles/${this.articleId}`,
        
      })
      .then(res => {
        this.comments = res.data.comment_set
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function(){
    this.getComment()
  }
}
</script>

<style>

</style>