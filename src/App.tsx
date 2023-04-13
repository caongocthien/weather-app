import useRouteElement from './useRouteElement'
import '/node_modules/flag-icons/css/flag-icons.min.css'

function App() {
  const routeElement = useRouteElement()
  return <div>{routeElement}</div>
}

export default App
