<template>
  <div class="labels-container">
    <my-header></my-header>
    <no-ssr>
      <vue-particles
        class="bg"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </no-ssr>
    <div class="label-content">
      <div class="left">
        <div class="mobile-classify-label">
          <mobile-label />
        </div>
        <div class="tags-blog-mobile">
          <span class="tags-title">{{ tag.name }}</span>
          <mobile-blog-item
            v-for="(item, index) in blogs"
            :key="index"
            :image="item.image"
            :title="item.title"
            :content="item.summary"
            :path="item.path"
            :time="item.createTime"
            :category="item.categoryName"
          />
        </div>
        <div class="tags-blog">
          <span class="tags-title">{{ tag.name }}</span>
          <div class="blog-container">
            <blog-item
              v-for="(item, index) in blogs"
              :key="index"
              :image="item.image"
              :title="item.title"
              :content="item.summary"
              :path="item.path"
              :time="item.createTime"
              :category="item.categoryName"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <label-card />
        <info-card />
      </div>
    </div>
    <pagination :totalPages="total" :changePage="changePage"></pagination>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "../../components/Navbar";
import MyFooter from "../../components/Footer";
import BlogItem from "../../components/BlogItem";
import LabelCard from "../../components/LabelCard";
import InfoCard from "../../components/InfoCard";
import MobileBlogItem from "../../components/MobileBlogItem";
import MobileLabel from "../../components/MobileLabel";
import Pagination from "../../components/Pagination";

import blogApi from "../../api/blog.js";

export default {
  components: {
    MyHeader,
    MyFooter,
    LabelCard,
    InfoCard,
    BlogItem,
    MobileBlogItem,
    MobileLabel,
    Pagination,
  },
  data() {
    return {
      currentTag: "",
      blogs: [],
      total: 0,
      tag:{},
    };
  },
  mounted() {
    this.tag = this.$route.params
    this.refresh();
  },
  
  methods: {

    changePage(n) {
      this.$router
        .push(`/tag/${this.$currentTag.key}/page/${n}`)
        .catch(() => {});
    },
    refresh() {
      //根据标签获取文章
      let param = {
        tagId:this.tag.id
      }
      blogApi.page(param).then(res => {
        this.blogs = res.data.data.records
        this.total = res.data.data.current
      });
    },
  },
};
</script>

<style lang="less">
@import "../../common/color.less";
.labels-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  .bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: left / cover fixed no-repeat url("../../assets/background.jpg");
    z-index: -1;
  }
  .label-content {
    position: relative;
    flex: 1;
    @media (min-width: 992px) {
      margin-top: 30px;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    max-width: 1284px;
    margin: 0 auto;
    .left {
      flex: 1;
      position: relative;
      @media (max-width: 992px) {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
      }
      .mobile-classify-label {
        @media (min-width: 992px) {
          display: none;
        }
        padding: 0 10px;
      }
      .tags-blog-mobile {
        @media (min-width: 992px) {
          display: none;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .tags-title {
          display: inline-block;
          font-size: 1.8rem;
          color: @whiteColor;
          font-weight: 100;
          margin: 20px 0 0 0;
          position: relative;
          &:after {
            content: "";
            width: 80%;
            height: 1px;
            background-color: #36bfc4;
            position: absolute;
            bottom: -5px;
            left: 10%;
          }
        }
      }
      .tags-blog {
        @media (max-width: 992px) {
          display: none;
        }
        position: relative;
        // margin-top: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: 0 auto;
        .blog-container {
          display: flex;
          // justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          min-width: 904px;
          div {
            margin-right: 20px;
          }
        }
        .tags-title {
          display: inline-block;
          font-size: 3rem;
          color: @whiteColor;
          font-weight: 100;
          margin: 0px 0 20px 0;
          text-align: center;
          position: relative;
          &:after {
            content: "";
            width: 80%;
            height: 1px;
            background-color: #36bfc4;
            position: absolute;
            bottom: -5px;
            left: 10%;
          }
        }
      }
    }
    .right {
      @media (max-width: 992px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      margin-left: 80px;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
</style>
