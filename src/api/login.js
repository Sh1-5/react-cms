import request from '@/network/request'

export const login = (name, password) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      name,
      password
    }
  })
}
