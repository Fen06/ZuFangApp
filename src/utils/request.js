import axios from 'axios'

// import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
})

// request.interceptors.request.use(function (config) {
//   const { user } = store.state
//   if(user && user.token){
//     config.data.Author
//   }
// })

// export default instance

export default request
