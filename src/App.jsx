import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  const path = window.location.pathname

  if (path === '/terms') return <Terms />
  if (path === '/privacy') return <Privacy />
  return <Home />
}

export default App
