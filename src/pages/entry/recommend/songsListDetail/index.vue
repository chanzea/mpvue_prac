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
        <div class="list-operate">
          <div class="left_opt">
            <span class="iconfont mini-bofang"></span>
            <span class="total">共{{songsList.length}}首</span>
          </div>
          <div class="right_opt">
            <span class="collect">收藏</span>
            <span class="collect_num">({{subscribedCount}})</span>
          </div>
        </div>
        <div class="songs-list">
          <div class="song-item" v-for="(item, index) in songsList" :key="index">
            <div class="song-index">{{index + 1}}</div>
            <div class="song-detail">
              <div class="detail-item">
                <span class="detail-name">
                  <i>{{item.name}}</i>
                  <i v-if="item.alia[0]" class="prop-dis">{{"("+item.alia[0]+")"}}</i>
                </span>
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
      subscribedCount: '',
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
      songsList: [],
    }
  },
  onLoad (query) {
    this.getPlayListDetail(query.id)
    console.log('this', this.$utils);
  },
  methods: {
    getPlayListDetail (id) {
      getPlayListDetail(id).then(res => {
        const { playlist, privileges } = res;
        this.$set(this.detail, 'playlist', playlist);
        this.$set(this.detail, 'privileges', privileges);
        this.$set(this, 'subscribedCount', formatNumber(playlist.subscribedCount));
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
          right: 6px;
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
    flex: 1;
    overflow: auto;
    .detail-list-content {
      .list-operate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 22px;
        .left_opt {
          padding: 8px;
          display: flex;
          .play_all {
            font-size: 14px;
            margin: 0 4px;
          }
          .total {
            color: #999;
            // line-height: 20px;
            &::before {
              content: '播放全部';
              font-size: 14px;
              margin: 0 4px;
              color: #666;
            }
          }
        }
        .right_opt {
          padding: 8px;
          background: #dd5949;
          color: #fff;
          // line-height: 22px;
          .collect {
            margin: 0 4px;
            position: relative;
            &::before {
              color: #fff;
              content: '+';
              font-size: 16px;
            }
          }
        }
      }
      .songs-list {
        padding: 0 10px;
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
            border-bottom: 0.5px solid #ccc;
            align-items: center;
            .detail-item {
              flex: 1;
              display: flex;
              flex-direction: column;
              .detail-name {
                flex: 1;
                font-size: 14px;
                padding-bottom: 4px;
                display: flex;
                align-items: center;
                color: #666;
                .prop-dis {
                  color: #ccc;
                  flex: 1;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              }
              .detail-creator {
                font-size: 12px;
                color: #999;
              }
            }
            .detail-operate {
              margin-left: 8px;
              display: flex;
              width: 15%;
              justify-content: flex-end;
              align-items: center;
              color: #999;
              .more {
                margin-left: 12px;
              }
            }
          }
          &:first-child {
            .song-detail {
              border-top: 0.5px solid #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
