import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'

import ArticleList from './views/articleList'
import MainContent from './views/mainContent'
import ArticleDetail from './views/articleDetail'
import About from './views/about'
import Demos from './views/demos'
// 重置css
import 'modern-css-reset'
import Slider from './views/demos/components/slider'
import Crud from './views/demos/components/crud'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <MainContent />
      }, {
        path: '/article',
        element: <ArticleList />
      }, {
        path: '/articleDetail',
        element: <ArticleDetail />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/demos',
        element: <Demos />,
        children: [
          {
            index: true,
            element: <Slider />
          }, {
            path: '/demos/crud',
            element: <Crud />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
