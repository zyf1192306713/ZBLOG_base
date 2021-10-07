import request from '@/utils/request'

export default {
  page() {
    return request({
      url: '/blog/view/v1/article/list',
      method: 'post',
      data:{}
    })
  },

  getFirst() {
    return request({
      url: '/blog/view/v1/article/getFirst',
      method: 'get',
    })
  }
}