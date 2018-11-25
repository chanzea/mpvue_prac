<template>
  <div class="component-cards">
    <div class="container">
      <div class="thumbnail">
        <img src="http://img0.imgtn.bdimg.com/it/u=3202486095,1447021423&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="content">
        <div class="title">
          标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
        </div>
        <div class="meta">
          <span class="meta-time">2小时前</span>
          <span class="meta-info">
            <i class="like">24</i>
            <i class="comment">10</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentCard'
}
</script>

<style lang="scss" scoped>
.component-cards {
  width: 100%;
  display: flex;
  border: 1px solid #ddd;
  margin-top: 10px;
  .container {
    flex: 1;
    display: flex;
    .thumbnail {
      width: 30%;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      flex: 1;
      padding: 10px;
      display: flex;
      flex-direction: column;
      .title {
        word-break: break-all;
        line-height:16px;
        font-size:14px;
        color:#333;
      }
      .meta {
        margin-top: 10px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        .meta-time {
          color: #7f7f7f;
        }
        .meta-info {
          display: flex;
          align-items: center;
          color: #728490;
        }
      }
    }
  }
}
</style>
