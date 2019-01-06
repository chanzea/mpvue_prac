<template>
  <div class="component-songs-list">
    <div class="container">
      <div class="thumbnail">
        <img :src="detail.picUrl" alt="">
      </div>
      <div class="dis">
        {{detail.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentSongsList',
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    // console.log('this.detail', this.detail)
  }
}
</script>

<style lang="scss" scoped>
.component-songs-list {
  width: 100%;
  display: flex;
  // padding: 10px;
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .thumbnail {
      // width: 30%;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dis {
      width: 100%;
      word-break: break-all;
      line-height:16px;
      font-size:12px;
      color:#333;
    }
  }
}
</style>
