<template>
  <div class="entry">
    <div class="content">
      <i-tabs class="content-tab" color="#fff" :current="currentTab" @change="changeTab">
        <i-tab key="recommend" title="个性推荐"></i-tab>
        <i-tab key="radioStation" title="主播电台"></i-tab>
      </i-tabs>
      <!-- 歌单推荐 -->
      <div class="personalized">
        <div class="dis">推荐歌单 ></div>
        <div class="songs-list">
          <div class="songs-list-item" v-for="(item, index) in songsList" :key="index">
            <songs-list :detail="item"></songs-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { personalized } from '@/api/index'

import songsList from '@/components/songsList.vue'
export default {
  name: 'Entry',
  data () {
    return {
      currentTab: 'recommend',
      current: 'homepage',
      songsList: []
    }
  },
  components: {
    songsList
  },
  created () {
    this.personalized()
  },
  methods: {
    changeTab ({ target }) {
      console.log('target', target)
      this.$set(this, 'currentTab', target.key)
    },

    personalized () {
      personalized().then(res => {
        console.log('res', res)
        this.$set(this, 'songsList', res.slice(0, 6))
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
  background-color: #fcfcfc;
  .content {
    flex: 1;
    .content-tab{
    }
    .personalized {
      margin-top: 10px;
      padding: 0 10px;
      .dis {
        font-weight: bold;
        font-size: 14px;
      }
      .songs-list {
        display: flex;
        flex-wrap: wrap;
        .songs-list-item {
          margin-top: 10px;
          width: 30%;
          flex-grow: 1;
          &:nth-child(3n+2) {
            margin-left: 8px;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>