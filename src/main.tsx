import './reportWebVitals'

import { ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'
import theme from './app/libraries/chakra-theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const loadMockServer = async () => {
  if (import.meta.env.VITE_USE_API_MOCKED === 'true') {
    const { worker } = await import('./mocks/browser')

    worker.start()
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <StrictMode>
      <App />
    </StrictMode>
  </>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

loadMockServer()
