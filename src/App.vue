<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
@import '../static/iconfont/iconfont.css';
</style>


<style>
page {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 12px;
  color: #333;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

img {
  width: 100%;
  height: 100%;
}
</style>
