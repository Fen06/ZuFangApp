import storage from './storage'
const TOKEN = 'ZUFANG'
const CITY_KEY = 'CITY_KEY'
const CITY_VALUE_KEY = 'CITY_VALUE_KEY'
export const getToken = () => storage.get(TOKEN)
export const setToken = (token) => storage.set(TOKEN, token)
export const removeToken = () => storage.remove(TOKEN)
export const setCity = (CurrentCity) => storage.set(CITY_KEY, CurrentCity)
export const getCity = () => storage.get(CITY_KEY)
export const setCityValue = (EareValue) =>
  storage.set(CITY_VALUE_KEY, EareValue)
export const getCityValue = () => storage.get(CITY_VALUE_KEY)
