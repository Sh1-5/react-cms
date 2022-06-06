import React, { memo } from 'react'
import { HashRouter as Router, useRoutes } from 'react-router-dom'

import routes from '@/router'

function RouteElement() {
  const element = useRoutes(routes)
  return element
}

const App = memo(() => {
  return (
    <Router>
      <RouteElement />
    </Router>
  )
})

App.displayName = 'App'

export default App
