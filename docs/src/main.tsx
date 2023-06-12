import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import AboutMe from './Portfolio/pages/About.page.tsx'
import Proyects from './Portfolio/pages/Proyects.page.tsx'
import Home from './Portfolio/Home.page.tsx'
import Blog from './Blog/Blog.tsx'
import HomeBlog from './Blog/pages/HomeBlog.tsx'
import PostPage from './Blog/pages/Post.page.blog.tsx'
import NotFoundBlog from './Blog/components/NotFound.component.blog.tsx'
import NotFound from './Portfolio/components/NotFound.component.tsx'

const router = createHashRouter([
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
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFoundBlog />,
    children: [
      {
        index: true,
        element: <HomeBlog />
      },
      {
        path: 'post/:id',
        element: <PostPage />,
      },
      {
        path: '*',
        element: <NotFoundBlog />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
