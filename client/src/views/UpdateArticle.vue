<template>
  <div class="article-list write-article">
    <input id="article-title-edit" type="text" style="width:100%; height:50px; font-size:18px; margin-top:10px; border:none" :value="this.articleTitle">
    <textarea id="article-content-edit" type="text" style="width:100%; height:350px; font-size:18px; margin-top:30px; border:none" :value="this.articleContent"></textarea>
    <div style="text-align:right; margin-top:30px;">
      <button class="btn-write-submit" @click="updateArticle">작성</button>
      <button class="btn-write-cancel" @click="cancelArticle">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateArticle',
  data: function(){
    return{
      articleId: 0,
      articleTitle: '',
      articleContent: '',
      articleData:{
        "title": "",
        "content": ""
      },
    }
  },
  methods: {
    updateArticle(){
      this.articleData.title = document.querySelector('#article-title-edit').value
      this.articleData.content = document.querySelector('#article-content-edit').value
      console.log(this.articleData)
      axios({
          method: 'put',
          url: `http://127.0.0.1:8000/api/v1/articles/${this.articleId}/`,
          data: this.articleData
        })
        .then(res => {
          this.$router.push('/')
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancelArticle(){
      this.$router.go(-1)
    },
    checkArticleId(articleId){
      this.articleId = articleId;
      this.getArticleInfo()
    },
    getArticleInfo(){
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/v1/articles/${this.articleId}`,
      })
      .then(res => {
        this.articleTitle = res.data.title
        this.articleContent = res.data.content
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created: function(){
    this.checkArticleId(Number(this.$route.query.articleId))   
  },
}
</script>

<style>

</style>