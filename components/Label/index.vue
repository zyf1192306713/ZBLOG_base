<template>
  <router-link class="container" :to="goTo(text)">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    goTo(url) {
      if (url === "All") {
        return "/tag";
      } else {
        return `/tag/${url}`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
