<template>
  <nuxt-link class="container" :to="{name:'tag',params:tag}">{{ tag.name }}</nuxt-link>
</template>

<script>
export default {
  props:['tag'],
  mounted(){

  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
