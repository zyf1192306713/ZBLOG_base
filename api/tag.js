import request from '@/utils/request'

export default {
  getAll() {
    return request({
      url: '/blog/view/v1/tag/getAll',
      method: 'get'
    })
  },
}