<template>
  <div class="article-list" style="margin-top:7vh">
    <div class="article-title">
      {{articleTitle}}
      <div>
        <img src="../assets/profile.png" alt="" style="width:35px;">
        <span style="font-size:20px; font-weight:bold; margin-left:8px;">스마일게이트</span>
        <span style="font-size:20px; margin-left:25px; color:#676767">{{articleDate}}</span>
      </div>
    </div>
    <div class="article-content" style="">
      <div>{{articleContent}}</div>
    </div>
    <div style="text-align:right">
      <button class="btn btn-write-update">
        <router-link :to="{ path: '/article/edit/', query: { articleId: showId  }}" style=" text-decoration:none">
          수정
        </router-link>
      </button>
      <!-- <button  @click="updateArticle">수정/</button/> -->
      <button class="btn btn-write-delete" @click="deleteArticle">삭제</button>
    </div>
    <Comment :articleId="this.articleId"/>

  </div>
</template>

<script>
import axios from 'axios'
import Comment from './Comment.vue'
// import UpdateArticleVue from './UpdateArticle.vue'

export default {
  name: 'Article',
  props: {
    articleId: {
      type: Number
    }
  },
  components:{
    Comment,
  },
  data: function(){
    return{
      articleTitle: '',
      articleContent: '',
      articleDate: '',
      showId:0,
    }
  },
  methods:{
    getInfo: function(){
      if (this.articleId == 0){
        console.log('ddd')
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/v1/articles',
        })
        .then(res => {
          this.showId = res.data[res.data.length-1].id
           axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/v1/articles/${this.showId}`,
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
        })
        .catch(err => {
          console.log(err)
        })
      }else{
        console.log('lll'+this.showId)
        this.showId = this.articleId
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
    updateArticle(){
      this.$router.push('article/edit')
      this.$router.go()
    },
    deleteArticle(){
      axios({
          method: 'delete',
          url: `http://127.0.0.1:8000/api/v1/articles/${this.showId}`,
        })
        .then(
          alert("글이 삭제되었습니다."),
          this.$router.go()
        )
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