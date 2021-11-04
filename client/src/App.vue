<template>
  <div id="app">
    <div class="container">
      <div class="header" >
        <div class="header" @click="goHome" style="display:hidden; cursor:pointer;"></div>
        <span class="header-text">스마일게이트님의 Blog</span>
        <button id="writeArticleBtn" class="btn-write" @click="goCreateArticle">글쓰기</button>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import './css/smilegate.css'

export default {
  name: 'App',
  methods: {
    goCreateArticle(){
      this.$router.push('article')
    },
    goHome(){
      if(this.$route.path!=='/'){
        this.$router.push('/')
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  background: url(./assets/background.jpg);
}

.container {
  width: 57.5vw;
  background-color: #FFB15C;
  display: inline-block;
}

.header{
  position: relative;
  background-image:url('./assets/header.png');
  background-size: 55vw 34vh ;
  width:55vw;
  height: 34vh;
  display: inline-block;
}

.header-text{
  position:absolute;
  left:7vw; 
  bottom:3vh;
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
}

.btn-write{
  position:absolute;
  right:3vw;
  bottom: 3vh;
  width:100px;
  height: 40px;
  background-color: #8987C7;
  color:#FFFFFF;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor:pointer;
}
</style>
