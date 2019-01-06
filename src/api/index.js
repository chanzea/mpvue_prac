import { baseUrl } from '@/config/index'

/**
 * 获取推荐歌单
 */
export function personalized () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/personalized`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.statusCode === 200) {
          resolve(res.data.result)
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

/**
 * 获取歌单详情
 * @param {String} id 歌单ID
 */
export function getPlayListDetail (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/playlist/detail/?id=${id}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.code === 200) {
          resolve(res.data.result)
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

export default {
  personalized,
  getPlayListDetail
}
