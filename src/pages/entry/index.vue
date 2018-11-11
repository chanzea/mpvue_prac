<template>
  <div class="entry">
    <div class="content">
    </div>
    <div class="footer">
      <i-tab-bar :current="current" bindchange="handleChange">
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
        <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
      </i-tab-bar>
    </div> 
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 'homepage'
    }
  },
  methods: {
    handleChange ({ detail }) {
      this.setData({
        current: detail.key
      })
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