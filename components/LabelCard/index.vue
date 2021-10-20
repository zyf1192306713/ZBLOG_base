<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">标签</span>
    <div class="label-container">
      <Label v-for="(item, index) in tags" :key="index" :tag="item" />
    </div>
  </div>
</template>

<script>
import Label from "../Label";

import api from "../../api/tag.js";

export default {
  components: {
    Label
  },
  data() {
    return {
      tags: []
    };
  },
  created() {
    this.getAllTags();
  },
  methods: {
    getAllTags() {
      api.getAll().then(res => {
          this.tags = res.data.data
      })
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>