<template>
  <div>
    <ArticleList :articleId="this.articleId"/>
    <Article :articleId="this.articleId"/>
    
    <!-- <button @click="get">글가져오기</button> -->

  </div>
</template>

<script>
// import axios from 'axios'
import '../css/home.css'
import ArticleList from './ArticleList.vue'
import Article from './Article.vue'


export default {
  name: 'Home',
  components:{
    ArticleList,
    Article,
  },
  data: function(){
    return{
      articleId: 0,
    }
  },
  methods: {
    checkArticleId(articleId){
      if (articleId){
        this.articleId = articleId;
        console.log('ddd'+articleId)
      } 
      // else{
      //   this.getInfo()
      // }
    },
    // getInfo: function(){
    //   axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1:8000/api/v1/articles',
    //   })
    //   .then(res => {
    //     this.articleId = res.data[res.data.length-1].id
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },
  },
  created: function(){
    this.checkArticleId(Number(this.$route.query.articleId))
    
  },

}
</script>

<style>

</style>