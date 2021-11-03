<template>
  <div class="article-list">
    <table class="table" style="width:100%;">
      <thead>
        <tr style="justify-content:space-around">
            <td style="text-align:left">글목록</td>
            <td style="text-align:right">작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, idx) in articles"  v-show="setPaginate(idx)" :key="idx">

          <td style="text-align:left" @click="page">
            <router-link :to="{ path: '/', query: { articleId: article.id  }}">
              {{ article.title }}
            </router-link>
            
          </td>
          <td style="text-align:right">{{ article.created_at.substring(0,10) }}</td>
        </tr>
      </tbody>
    </table>
    <div id="pagination">
      <a href="#" class="btn btn-default" v-for="page_index in paginate_total" @click.prevent="updateCurrent(page_index)" :key="page_index">
        {{ page_index}}
      </a>
    </div>
  </div>
</template>

<script>
import '../css/articlelist.css'
import axios from 'axios'

export default {
  name: 'ArticleList',
  // props: {
  //   articleId: {
  //     type: Number
  //   }
  // },
  data: function(){
    return {
      current: 1,
      articles: [],
      paginate:5,
      paginate_total: 10,
    }
  },
  created: function(){
    this.getArticles()
  },
  mounted: function(){
  },

  methods: {
    getArticles: function(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/articles',
      })
      .then(res => {
        this.articles = res.data
        this.paginate_total = parseInt(this.articles.length/this.paginate+1)
        console.log(this.articles)
      })
      .catch(err => {
        console.log(err)
      })
    },
    setPaginate: function (i) {
       if (this.current == 1) {
         return i < this.paginate;
       }
       else {
         return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
       }
     },
     setStatus: function (status) {
       this.status_filter = status;
       this.$nextTick(function () {
         this.updatePaginate();
       });
     },
     updateCurrent: function (i) {
       this.current = i;
     },
     updatePaginate: function () {
       this.current = 1;
       this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
     },
     page:function(){
       this.$router.go();
     }
  }
}
</script>

<style>

</style>