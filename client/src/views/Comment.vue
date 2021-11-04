<template>
  <div class="comments" style="text-align:right">
    <!-- 댓글 목록 -->
    <table class="table" style="width:100%;">
      <thead>
        <tr style="font-weight:bold; font-size:18px; border-bottom:2px solid;">
            <td style="text-align:left; ">댓글</td>
            <td style="text-align:right;"></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comment, idx) in comments" :key="idx">
          <td style="text-align:left;">
              {{ comment.content }}
          </td>
          <td style="text-align:right">{{ comment.created_at.substring(0,10) }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 댓글입력창 -->
    <textarea class="comment-area" style="" id="commentText" cols="30" rows="5" type="text" maxlength="200" placeholder="댓글을 작성해주세요."></textarea>
    <button class="btn-write-comment"  @click="submitComment" type="submit" >등록</button>
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
      commentData:{
        "content": "", 
      },
      showId:0,
    }
  },
  methods:{
    getComment: function(){
      if (this.articleId == 0){
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
            this.comments = res.data.comment_set
          })
          .catch(err => {
            console.log(err)
          })
        })
        .catch(err => {
          console.log(err)
        })
      }else{
        axios({
          method: 'get',
          url: `http://127.0.0.1:8000/api/v1/articles/${this.articleId}`,
        })
        .then(res => {
          this.comments = res.data.comment_set
          this.showId = this.articleId
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    submitComment: function(){
      this.commentData.content = document.querySelector('#commentText').value
      axios({
      method: 'post',
      url: `http://127.0.0.1:8000/api/v1/articles/${this.showId}/comments/`,
      data: this.commentData 
      })
        .then(() => {
          this.$router.go()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted: function(){
    this.getComment()
  },
}
</script>

<style>

</style>