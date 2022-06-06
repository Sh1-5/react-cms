import React from 'react'
import { Navigate } from 'react-router-dom'

import Login from '@/views/login'
import Main from '@/views/main'

const routes = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Main />
  }
]

export default routes
