import request from '@/network/request'

export const menuList = () => {
  return request({
    url: '/menu/list',
    method: 'post'
  })
}
