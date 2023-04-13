import { Weather } from '~/types/weather.type'
import http from '~/utils/http'

const weatherApi = {
  getWeatherWithState: (params: { q?: string }) => http.get<Weather>('', { params: params })
}

export default weatherApi
