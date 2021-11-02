<template>
  <div>
    <div>home</div>
    <div>aflaksfjkasflsjlkf</div>
    <button @click="get">글가져오기</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  methods: {
    get: function(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/articles',
      })
      .then(res => {
        console.log(res)

      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>