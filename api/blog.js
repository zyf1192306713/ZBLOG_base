import request from '@/utils/request'

export default {
  page(param) {
    return request({
      url: '/blog/view/v1/article/page',
      method: 'post',
      data:param
    })
  },

  getFirst() {
    return request({
      url: '/blog/view/v1/article/getFirst',
      method: 'get',
    })
  },

  getById(param){
    return request({
      url: `/blog/view/v1/article/getById/${param}`,
      method: 'get',
    })
  }
}