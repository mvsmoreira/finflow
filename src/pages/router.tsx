import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Dashboard } from './Dashboard'
import { Entries } from './Entries'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/entries',
        element: <Entries />,
      },
    ],
  },
])
