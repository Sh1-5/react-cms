import React, { memo } from 'react'

import { Button } from 'antd'

const App = memo(() => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
    </div>
  )
})

App.displayName = 'App'

export default App
