import request from '@/utils/request'
export const getHouses = (id) => {
  return request({
    url: `/houses/${id}`,
    path: { id: id }
  })
}

export const getUserHouses = () => {
  return request({
    url: '/user/houses'
  })
}
