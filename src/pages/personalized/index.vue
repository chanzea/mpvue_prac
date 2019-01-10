<template>
  <div class="personalized-list">
    <div class="songs-dis">
      歌单列表
    </div>
    <scroll-view class='scroll-content' scroll-y="true" style='height: 100%;' bindscrolltolower="loadMoreData">
      <div class="songs-list">
        <div class="songs-list-item" v-for="(item, index) in songsListData" :key="index">
          <songs-list :detail="item"></songs-list>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { personalized } from '@/api/index'

import songsList from '@/components/songsList.vue'

export default {
  name: 'personalizedList',
  data () {
    return {
      songsListData: [],
      start: ''
    }
  },
  components: {
    songsList
  },
  onShow () {
    this.start = 0
    this.personalized(0)
  },

  methods: {
    personalized (start) {
      personalized().then(res => {
        if (res.length !== 0) {
          let songsList = this.songsListData
          songsList = songsList.concat(res)
          this.$set(this, 'songsListData', songsList)
          this.start = this.start + 6
        }
      })
    },

    onReachBottom () {
      this.personalized(this.start)
    },

    loadMoreData () {
      this.personalized(this.start)
    }
  }
}
</script>

<style lang="scss" scoped>
.personalized-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  .songs-dis {
    height: 20px;
  }
  .songs-list {
    flex: 1;
    overflow: auto;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    .songs-list-item {
      margin-top: 10px;
      width: 40%;
      padding: 4px;
      flex-grow: 1;
    }
  }
}
</style>
