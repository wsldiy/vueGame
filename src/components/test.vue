<template>
  <div>
    <ul :class="{ textColor: isRed }">
      <li v-for="items in todos">{{items.text}}</li>
    </ul>
    <button @click="getMsg">变色</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

  export default {
    name: "test",
    data() {
      return {
        'todos': [
          {'id': 1, 'text': 'wsl'},
          {'id': 2, 'text': 'lyn'},
          {'id': 3, 'text': 'sh'}
        ]
      }
    },
    computed: {
      ...mapState(['isRed'])
    },
    methods: {
      ...mapMutations(['getMsg'])
    }
  }
</script>

<style scoped>
  .textColor {
    color: red;
  }
</style>
