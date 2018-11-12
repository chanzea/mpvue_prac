<template>
  <div class="entry">
    <div class="content">
    </div>
    <div class="footer">
      <i-tab-bar :current="current" @click="handleChange">
        <i-tab-bar-item v-for="(item, index) in taBbar" :key="item.key" :icon="item.icon" :current-icon="item.current_icon" :dot="item.isDot" :title="item.title" @click="handleChanges"></i-tab-bar-item>
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
        key: 'group',
        icon: 'group',
        current_icon: 'group_fill',
        title: 'friend',
        isDot: false
      }, {
        key: 'remind',
        icon: 'remind',
        current_icon: 'remind_fill',
        title: 'Notice',
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
    handleChange (value) {
      console.log('value', value)
      // this.$set(this, 'current', detail.key)
    },
    handleChanges (value) {
      console.log('values', value)
      // this.$set(this, 'current', detail.key)
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