import { ReactQueryDevtools } from 'react-query/devtools'

import Home from '../pages/Home'
import { withProviders } from './helpers/with-providers'

function App() {
  return (
    <>
      <Home />
      <ReactQueryDevtools />
    </>
  )
}

export default withProviders(App)
