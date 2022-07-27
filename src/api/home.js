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

// /home/groups
// 当地租房小组
export const getRentHouse = (areaId) => {
  return request({
    url: '/home/groups',
    params: {
      area: areaId
    }
  })
}

// 根据城市名称查询该城市信息[区域]
export const getCityEare = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id: id
    }
  })
}

// /houses

// 根据条件查询房屋
export const getFindHouse = (params) => {
  return request({
    url: '/houses',
    params
  })
}
