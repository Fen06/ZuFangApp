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
// 是否收藏
export const getIsFavorate = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    path: {
      id: id
    }
  })
}
// 添加收藏
export const getAddFavorate = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST',
    path: {
      id: id
    }
  })
}

// 删除收藏
export const getDeleteFavorate = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE',
    path: {
      id: id
    }
  })
}

// 发布房屋所需条件
export const getHouseCondition = () => {
  return request({
    url: '/houses/params'
  })
}
