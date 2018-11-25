<template>
  <div class="page-news">
    <div class="head">
      <i-tabs class="content-tab" color="#fff" scroll :current="currentTab" @change="changeTab">
        <i-tab v-for="(item, index) in tabs" :key="item.key" :title="item.title"></i-tab>
      </i-tabs>
    </div>
    <div class="middle">
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
      <component-card></component-card>
    </div>
  </div>
</template>

<script>
import componentCard from './../../components/card.vue'

export default {
  name: 'PageNews',
  data () {
    return {
      currentTab: 'top_line',
      tabs: [
        {
          title: '头条',
          key: 'top_line'
        }, {
          title: '资讯',
          key: 'imformation'
        }, {
          title: '战报',
          key: 'competion'
        }, {
          title: '关注',
          key: 'focus'
        }, {
          title: '社交媒体',
          key: 'social'
        }, {
          title: '图集',
          key: 'pictures'
        }
      ]
    }
  },
  components: {
    componentCard
  },
  methods: {
    changeTab ({ target }) {
      console.log('target', target)
      this.$set(this, 'currentTab', target.key)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-news {
  width: 100%;
  display: flex;
  flex-direction: column;
  .head {

  }
  .middle {
    flex: 1;
    overflow: auto;
  }
}
</style>
