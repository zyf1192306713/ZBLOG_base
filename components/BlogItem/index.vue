<template>
  <nuxt-link :to="{name:'blogDetails',params:{id:id}}" class="blog-item">
    <div class="img-container">
      <img :src="source" alt class="img" />
    </div>
    <div class="contents">
      <div class="title">{{ title }}</div>
      <div class="content">{{ mdContent }}</div>
      <div class="bottom">
        <span class="time">
          <i class="iconfont iconshizhong"></i>
          {{ createTime }}
        </span>
        <span class="category">
          <i class="iconfont iconlabel"></i>
          {{ categoryName }}
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["id","source", "title", "mdContent", "createTime", "categoryName", "path"],
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
