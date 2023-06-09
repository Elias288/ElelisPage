import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutMe from './pages/About.page.tsx'
import Proyects from './pages/Proyects.page.tsx'
import Home from './pages/Home.page.tsx'
import Blog from './pages/Blog.page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutMe />
      },
      {
        path: "/proyects",
        element: <Proyects />
      },
    ]
  },
  {
    path: "/blog",
    element: <Blog />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
