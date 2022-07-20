import request from '@/utils/request'
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level: level
    }
  })
}

export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}

// /area/hot
