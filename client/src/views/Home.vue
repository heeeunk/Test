<template>
  <div>
    <ArticleList :articleId="this.articleId"/>
    <Article :articleId="this.articleId"/>
    <Comment :articleId="this.articleId"/>
    <!-- <button @click="get">글가져오기</button> -->

  </div>
</template>

<script>
// import axios from 'axios'
import '../css/home.css'
import ArticleList from './ArticleList.vue'
import Article from './Article.vue'
import Comment from './Comment.vue'

export default {
  name: 'Home',
  components:{
    ArticleList,
    Article,
    Comment,
  },
  data: function(){
    return{
      articleId: 1,
    }
  },
  methods: {
    checkArticleId(articleId){
      if (articleId){
        this.articleId = articleId;
      }
    }
  },
  created: function(){
    this.checkArticleId(Number(this.$route.query.articleId))
  },

}
</script>

<style>

</style>