<template>
  <nuxt-link class="container" :to="{name:'tag',param:{id:tag.id}}">{{ tag.name }}</nuxt-link>
</template>

<script>
export default {
  props:['tag'],
  mounted(){
    console.log(this.tag)
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
