<template>
  <div class="entry">
    <div class="content">
      <i-tabs :current="currentTab" @change="changeTab">
        <i-tab key="game" title="赛程"></i-tab>
        <i-tab key="focus" title="我的关注"></i-tab>
      </i-tabs>
    </div>
    <div class="footer">
    </div> 
  </div>
</template>
<script>
import { tabBar } from '@/utils/data'
export default {
  name: 'Entry',
  data () {
    return {
      currentTab: 'game',
      current: 'homepage',
      tabBar: tabBar
    }
  },
  created () {

  },
  methods: {
    changeTab ({ target }) {
      console.log('target', target)
      this.$set(this, 'currentTab', target.key)
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