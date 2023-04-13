import { useSearchParams } from 'react-router-dom'

export const useQueryParams = () => {
  const [searchParams] = useSearchParams()

  const searchParamObject = Object.fromEntries([...searchParams])
  return searchParamObject
}

export const convertDatetoDay = (date: string) => {
  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
  const initDate = new Date(date)
  return weekday[initDate.getDay()]
}
