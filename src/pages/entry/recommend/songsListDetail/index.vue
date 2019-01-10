<template>
  <div class="songs-list-detail">
    <div class="detail-content">
      <!-- 封面信息 -->
      <div class="detail-cover" v-if="detail && detail.playlist">
        <div class="cover-pic">
          <img :src="detail.playlist.coverImgUrl" alt="" mode="widthFix">
          <i class="iconfont mini-erji ear-phone-icon">&nbsp;{{playCount}}</i>
        </div>
        <div class="cover-meta">
          <span class="meta-name">{{detail.playlist.name}}</span>
          <span class="meta-creator">
            <img class="meta-creator-avatar" :src="detail.playlist.creator.avatarUrl" alt="" mode="widthFix">
            <span class="meta-creator-name">{{detail.playlist.creator.nickname}}</span>
            <!-- <span class="iconfont mini-rili"></span> -->
          </span>
        </div>
      </div>
      <!-- 操作区域 -->
      <div class="detail-operate">
        <span class="operate-item" v-for="(item, index) in operateList" :key="index">
          <i class="iconfont item-icon" :class="item.icon"></i>
          {{item.label}}
        </span>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="detail-list">
      <div class="detail-list-content">
        <div class="list-operate"></div>
        <div class="songs-list">
          <div class="song-item" v-for="(item, index) in songsList" :key="index">
            <div class="song-index">{{index + 1}}</div>
            <div class="song-detail">
              <div class="detail-item">
                <span class="detail-name" :prop-dis="item.alia[0]">{{item.name}}</span>
                <span class="detail-creator">{{item.ar[0].name}}-{{item.al.name}}</span>
              </div>
              <div class="detail-operate">
                <i v-if="item.mv !== 0" class="iconfont mini-video-play"></i>
                <i class="iconfont mini-more more"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import { getPlayListDetail } from '@/api/index'
import { formatNumber } from '@/utils/index'

const { $Toast } = require('dist/iview/base/index')
export default {
  name: 'songsListDetail',
  data () {
    return {
      detail: {},
      playCount: '',
      operateList: [
        {
          icon: 'mini-pinglun',
          label: ''
        }, {
          icon: 'mini-fenxiang',
          label: ''
        }, {
          icon: 'mini-xiazai',
          label: '下载',
        }, {
          icon: 'mini-duoxuan',
          label: '多选'
        }
      ],
      songsList: []
    }
  },
  onLoad (query) {
    this.getPlayListDetail(query.id)
    console.log('this', this.$utils);
  },
  methods: {
    getPlayListDetail (id) {
      getPlayListDetail('924680166').then(res => {
        const { playlist, privileges } = res;
        this.$set(this.detail, 'playlist', playlist);
        this.$set(this.detail, 'privileges', privileges);
        this.$set(this, 'playCount', formatNumber(playlist.playCount))
        this.$set(this.operateList[0], 'label', playlist.commentCount);
        this.$set(this.operateList[1], 'label', playlist.shareCount);
        this.$set(this, 'songsList', playlist.tracks);
        console.log('this.detail', this.detail);
      }, err => {
        $Toast({
          content: '错误的提示',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.songs-list-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  .detail-content {
    display: flex;
    flex-direction: column;
    background-color: #362627;
    .detail-cover {
      padding: 10px;
      display: flex;
      .cover-pic {
        padding-left: 20px;
        width: 36%;
        margin-right: 16px;
        color: #fff;
        position: relative;
        .ear-phone-icon {
          position: absolute;
          font-size: 12px;
          top: 0;
          right: 10px;
        }
      }
      .cover-meta {
        color: #fff;
        padding-top: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        .meta-name {
          margin-bottom: 10px;
          color: #fff;
          font-size: 16px;
        }
        .meta-creator {
          display: flex;
          align-items: center;
          .meta-creator-avatar {
            width: 24px;
            height: 24px;
            margin-right: 8px;
            border-radius: 50%;
          }
          .meta-creator-name {
            color: #fff;
            font-size: 12px;
          }
        }
      }
    }
    .detail-operate {
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      .operate-item {
        padding-top: 12px;
        padding-bottom: 8px;
        flex: 1;
        font-size: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
        .item-icon {
          font-size: 20px;
        }
      }
    }
  }
  .detail-list {
    padding: 0 10px;
    flex: 1;
    overflow: auto;
    .detail-list-content {
      .songs-list {
        display: flex;
        flex-direction: column;
        .song-item {
          display: flex;
          align-items: center;
          .song-index {
            color: #999;
            padding: 8px;
            margin-right: 6px;
          }
          .song-detail {
            display: flex;
            flex: 1;
            padding: 8px 0;
            border-bottom: 1px solid #ccc;
            align-items: center;
            .detail-item {
              flex: 1;
              display: flex;
              flex-direction: column;
              .detail-name {
                font-size: 14px;
                padding-bottom: 4px;
                &::after {
                  content: attr(prop-dis);
                }
              }
              .detail-creator {
                font-size: 12px;
              }
            }
            .detail-operate {
              margin-left: 8px;
              display: flex;
              width: 15%;
              justify-content: flex-end;
              align-items: center;
              .more {
                margin-left: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
