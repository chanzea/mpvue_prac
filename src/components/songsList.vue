<template>
  <div class="component-songs-list">
    <div class="container" @click="getDetail">
      <div class="thumbnail">
        <img :src="detail.picUrl" alt="" mode="widthFix">
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
  methods: {
    getDetail () {
      console.log('detail', this.detail.id)
      this.$emit('on-getDetail', this.detail.id)
    }
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
