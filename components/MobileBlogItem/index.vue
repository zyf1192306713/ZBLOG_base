<template>
  <router-link to="path" class="mobile-blog-item">
    <div class="item-left">
      <img :src="image" alt class="left-image" />
    </div>
    <div class="item-right">
      <div class="title">{{ title }}</div>
      <div class="content">{{ mdContent }}</div>
      <div class="bottom">
        <span class="time">
          <i class="iconfont iconshizhong"></i>
          {{ creatTime }}
        </span>
        <span class="category">
          <i class="iconfont iconlabel"></i>
          {{ categoryName }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    "image",
    "title",
    "mdContent",
    "creatTime",
    "categoryName",
    "url",
    "id",
    "path",
  ],
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
