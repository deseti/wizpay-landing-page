import Home from './pages/Home'
import Analytics from './pages/Analytics'

function App() {
  const path = window.location.pathname

  return path === '/analytics' ? <Analytics /> : <Home />
}

export default App
