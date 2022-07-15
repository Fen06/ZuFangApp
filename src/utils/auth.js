import storage from './storage'
const TOKEN = 'ZUFANG'

export const getToken = () => storage.get(TOKEN)
export const setToken = (token) => storage.set(TOKEN, token)
export const remove = () => storage.remove(TOKEN)
