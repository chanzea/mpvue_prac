<template>
  <div class="entry">
    <div class="content">
    </div>
    <div class="footer">
      <i-tab-bar :current="current" @change="handleChange">
        <i-tab-bar-item v-for="(item, index) in taBbar" :key="item.key" :icon="item.icon" :current-icon="item.current_icon" :dot="item.isDot" :title="item.title"></i-tab-bar-item>
      </i-tab-bar>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'Entry',
  data () {
    return {
      current: 'homepage',
      taBbar: [{
        key: 'homepage',
        icon: 'homepage',
        current_icon: 'homepage_fill',
        title: 'Home',
        isDot: false
      }, {
        key: 'activity',
        icon: 'activity',
        current_icon: 'activity_fill',
        title: '最新',
        isDot: false
      }, {
        key: 'live',
        icon: 'live',
        current_icon: 'live_fill',
        title: '视频',
        isDot: false
      }, {
        key: 'mine',
        icon: 'mine',
        current_icon: 'mine_fill',
        title: 'My',
        isDot: true
      }]
    }
  },
  methods: {
    handleChange ({ target }) {
      this.$set(this, 'current', target.key)
    }
  }
}
</script>

<style scoped lang='scss'>
.entry {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    color: red;
    flex: 1;
    font-size: 10px;
  }
}
</style>