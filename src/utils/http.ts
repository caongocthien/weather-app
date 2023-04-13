import axios, { AxiosInstance } from 'axios'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: `http://api.weatherapi.com`,
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        key: 'a51ee50b8a314e7093c155823231104',
        days: 7
      }
    })
  }
}

const http = new Http().instance

export default http
