<template>
  <div class="w-3 wd" @click="change">123</div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        strHuan: '983ca1ae66a6f3c4378b63099bd4ae8aefe14c3afddc333d65ace6dcc93b579162ea8ac68e3dd158d91c9f71c8aea1a36022c3e5e81a69f0bf0dddefcc1aebc5ffe651d25b9e5afc2d8531de53657a7b38fdccdb8293ec84ec3ce7edb082424d44e2300bac4e5d59'
      }
    },
    methods: {
      change: function () {
        var params = new URLSearchParams();
        params.append('json','123');
        this.$axios.post('/api/wawajiList', params)
          // {
            // headers: {
            //   'Access-Control-Allow-Origin':'*'
            // }
          // }
        // this.$axios.get('/api/huoDongList')
          .then(res => console.log(res))
      }
    }
  }
</script>

<style scoped>

</style>
