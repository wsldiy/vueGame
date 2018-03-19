<template>
  <div class="w-3 h-2 bg-b" @click="change">{{strHuan}}}</div>
</template>

<script>
  import Ajax from '@/assets/js/api/ajax.js';

  export default {
    name: "index",
    data() {
      return {
        strHuan: '983ca1ae66a6f3c4378b63099bd4ae8aefe14c3afddc333d65ace6dcc93b579162ea8ac68e3dd158d91c9f71c8aea1a36022c3e5e81a69f0bf0dddefcc1aebc5ffe651d25b9e5afc2d8531de53657a7b38fdccdb8293ec84ec3ce7edb082424d44e2300bac4e5d59'
      }
    },
    methods: {
      change: function () {
        Ajax('/wawajiList', {'json': this.strHuan}).then(res => console.log('娃娃列表', decryptByDES(res.data)));
      }
    }
  }
</script>

<style scoped>
  .w-3 {
    width: 120px;
  }
  .h-2{
    height: 80px;
  }
  .bg-b{
    background-color: #000;
  }
</style>
