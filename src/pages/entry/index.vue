<template>
  <div class="entry">
    <div class="content">
      <i-tabs class="content-tab" fixed color="#fff" :current="currentTab" @change="changeTab">
        <i-tab key="recommend" title="个性推荐"></i-tab>
        <i-tab key="radioStation" title="主播电台"></i-tab>
      </i-tabs>
      <div class="content-wrap">
        <page-recommend v-if="currentTab === 'recommend'"></page-recommend>
        <page-radio v-if="currentTab === 'radioStation'"></page-radio>
      </div>
    </div>
  </div>
</template>
<script>

import pageRecommend from './recommend/index'
import pageRadio from './radio/index'
export default {
  name: 'Entry',
  data () {
    return {
      currentTab: 'recommend'
    }
  },
  components: {
    pageRecommend,
    pageRadio
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
  background-color: #fcfcfc;
  .content {
    flex: 1;
    .content-tab{
      position: fixed;
      height: 42px;
    }
    .content-wrap {
      margin-top: 60px;
      padding: 0 10px;
    }
  }
}
</style>