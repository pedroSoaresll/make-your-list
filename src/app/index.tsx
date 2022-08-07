import { ReactQueryDevtools } from 'react-query/devtools'

import Router from '../pages'
import { withProviders } from './helpers/with-providers'

function App() {
  return (
    <>
      <Router />
      <ReactQueryDevtools />
    </>
  )
}

export default withProviders(App)
