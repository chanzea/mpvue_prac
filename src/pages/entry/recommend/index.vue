<template>
  <div class="page-recommend">
    <div class="recommend content-item">
      <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
        <span class="iconfont icon-item" :class="item.icon" @click="jumpToPage(item.path)"></span>
        {{item.label}}
      </div>
    </div>
    <!-- 歌单推荐 -->
    <div class="personalized content-item">
      <div class="dis" @click="jumpToPage('/personalized/index')">推荐歌单 ></div>
      <div class="songs-list">
        <div class="songs-list-item" v-for="(item, index) in personalizedList" :key="index">
          <songs-list :detail="item" @on-getDetail="getDetail"></songs-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { personalized, privatecontent } from '@/api/index'

import songsList from '@/components/songsList.vue'
export default {
  name: 'pageRecommend',
  components: {
    songsList
  },
  data () {
    return {
      personalizedList: [],
      privatecontent: [],
      recommend: [
        {
          label: '私人FM',
          icon: 'mini-iconset0278',
          path: ''
        }, {
          label: '每日推荐',
          icon: 'mini-rili',
          path: ''
        }, {
          label: '歌单',
          icon: 'mini-gedan',
          path: '/personalized/index'
        }, {
          label: '排行榜',
          icon: 'mini-paixingbang',
          path: ''
        }
      ]
    }
  },
  created () {
    this.personalized()
  },
  methods: {
    personalized () {
      personalized().then(res => {
        console.log('res', res)
        this.$set(this, 'personalizedList', res)
      })
    },

    privatecontent () {
      privatecontent().then(res => {
        this.$set(this, 'privatecontent', res)
      })
    },

    jumpToPage (url) {
      wx.navigateTo({
        url: `/pages${url}`
      })
    },
    // 获取歌单详情
    getDetail (id) {
      console.log('id', id)
      wx.navigateTo({
        url: `/pages/entry/recommend/songsListDetail/index?id=${id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-recommend {
  .content-item {
    margin-bottom: 20px;
    .dis {
      font-weight: bold;
      font-size: 14px;
    }
    &.recommend {
      display: flex;
      .recommend-item {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        
        .icon-item {
          margin: auto;
          padding: 12px;
          background: #c4483c;
          border-radius: 100%;
          color: #fff;
          font-size: 20px;
          margin-bottom: 2px;
        }
      }
    }
    &.personalized {
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

