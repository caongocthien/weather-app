import { Weather } from '~/types/weather.type'
import http from '~/utils/http'

const weatherApi = {
  getWeatherWithState: (params: { q?: string }) => http.get<Weather>('/v1/forecast.json', { params: params })
}

export default weatherApi
