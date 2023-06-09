import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutMe from './pages/About.page.tsx'
import Proyects from './pages/Proyects.page.tsx'
import Home from './pages/Home.page.tsx'
import Blog from './pages/Blog/Blog.tsx'
import HomeBlog from './pages/Blog/pages/HomeBlog.tsx'
import Post from './pages/Blog/pages/Post.page.blog.tsx'
import NotFound from './pages/Blog/components/NotFound.component.blog.tsx'

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
        path: "about",
        element: <AboutMe />
      },
      {
        path: "proyects",
        element: <Proyects />
      },
    ]
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomeBlog />
      },
      {
        path: 'post/:id',
        element: <Post />,
      },
      {
        path: '404',
        element: <NotFound />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
