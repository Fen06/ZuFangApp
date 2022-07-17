import request from '@/utils/request'
export const getHouses = (id) => {
  return request({
    url: `/houses/${id}`,
    path: { id: id }
    // headers: {
    //   authorization: store.state.user.token
    // }
  })
}
