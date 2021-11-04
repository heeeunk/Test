<template>
  <div>
    <ArticleList :articleId="this.articleId"/>
    <Article :articleId="this.articleId"/>
  </div>
</template>

<script>
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
      articleId: 0, //기본페이지
    }
  },
  methods: {
    checkArticleId(articleId){
      if (articleId){
        this.articleId = articleId;
      } 
    },
  },
  created: function(){
    this.checkArticleId(Number(this.$route.query.articleId))
  },
}
</script>

<style>

</style>