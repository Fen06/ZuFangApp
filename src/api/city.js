import request from '@/utils/request'
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level: level
    }
  })
}
