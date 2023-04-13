import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <Homepage />
    }
  ])
  return routeElements
}
