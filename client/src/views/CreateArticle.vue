<template>
  <div class="article-list write-article">
    <input class="create-article-title" id="article-title" type="text" placeholder="글 제목을 입력해주세요.">
    <textarea class="create-article-content" id="article-content" type="text" placeholder="글 내용을 입력해주세요."></textarea>
    <div style="text-align:right; margin-top:20px;">
      <button class="btn btn-write-submit" @click="submitArticle">작성</button>
      <button class="btn btn-write-cancel" @click="cancelArticle">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateArticle',
  data: function(){
    return{
      articleData:{
        "title": "",
        "content": ""
      },
    }
  },
  methods: {
    submitArticle(){
      this.articleData.title = document.querySelector('#article-title').value
      this.articleData.content = document.querySelector('#article-content').value
      axios({
          method: 'post',
          url: "http://127.0.0.1:8000/api/v1/articles/",
          data: this.articleData
        })
        .then(res => {
          res.data
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancelArticle(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>