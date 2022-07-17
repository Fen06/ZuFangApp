import request from '@/utils/request'
export const getHouses = (id) => {
  return request({
    url: `/houses/${id}`,
    // /houses/{id}
    path: { id: id }
    // headers: {
    //   authorization: store.state.user.token
    // }
  })
}

export const getUserHouses = () => {
  return request({
    url: '/user/houses'
    // headers: {
    //   authorization: store.state.user.token
    // }
  })
}
