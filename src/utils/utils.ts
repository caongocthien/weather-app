import { useSearchParams } from 'react-router-dom'
import lookup from 'country-code-lookup'

export const useQueryParams = () => {
  const [searchParams] = useSearchParams()

  const searchParamObject = Object.fromEntries([...searchParams])
  return searchParamObject
}

export const convertDatetoDay = (date: string) => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const initDate = new Date(date)
  return weekday[initDate.getDay()]
}

interface Location {
  latitude: string
  longitude: string
}

export const getLocation = <T extends Location>(): Promise<T> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude.toString()
        const longitude = position.coords.longitude.toString()
        const location = { latitude: latitude, longitude: longitude } as T
        resolve(location)
      })
    } else {
      reject('Geolocation is not supported by this browser.')
    }
  })
}

export const getCountryCodeIso2 = (contryName: string) => {
  const result = lookup.byCountry(contryName as string)
  return result?.iso2.toLocaleLowerCase()
}

export const getSessionInDayByUrl = (url: string) => {
  return url && url.split('/')[5]
}
