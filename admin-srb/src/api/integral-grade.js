// @ 符号在vue.config.js 中配置， 表示 'src' 路径的别名
import request from '@/utils/request'

export default {
  list() {
    return request({
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })
  },
  removeById(id) {
    return request({
      url: `/admin/core/integralGrade/removeById/${id}`,
      method: 'delete'
    })
  },
  save(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/save',
      method: 'post',
      data: integralGrade
    })
  },
  getById(id) {
    return request({
      url: `/admin/core/integralGrade/getById/${id}`,
      method: 'get'
    })
  },
  updateData(integralGrade){
    return request({
      url: '/admin/core/integralGrade/updateById',
      method: 'put',
      data: integralGrade
    })
  }

}