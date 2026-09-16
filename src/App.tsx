import Portfolio from './Portfolio'
import FireReadyForests from './FireReadyForests'

function App() {
  const isFireReady = window.location.hostname.startsWith('fireready.') || window.location.pathname.startsWith('/fire-ready-forests')

  return isFireReady
    ? <FireReadyForests />
    : <Portfolio />
}

export default App
