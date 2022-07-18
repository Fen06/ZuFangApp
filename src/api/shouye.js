import request from '@/utils/request'
export const getShouye = () => {
  return request({
    url: '/home/swiper'
  })
}
