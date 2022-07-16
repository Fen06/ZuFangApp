import request from '@/utils/request'
import store from '@/store'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      authorization: store.state.user.token
    }
  })
}
