<template>
  <div class="article-list" style="margin-top:7vh">
    <div>{{articleTitle}}</div>
    <div>{{articleContent}}</div>
    <div>{{articleDate}}</div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  props: {
    articleId: {
      type: Number
    }
  },
  data: function(){
    return{
      articleTitle: '',
      articleContent: '',
      articleDate: '',
    }
  },
  methods:{
    getInfo: function(){
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/v1/articles/${this.articleId}`,
      })
      .then(res => {
        this.articleTitle = res.data.title
        this.articleContent = res.data.content
        this.articleDate = res.data.created_at.substring(0,10)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function(){
    this.getInfo()
  }
}
</script>

<style>

</style>