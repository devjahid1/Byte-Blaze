import {createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Blogs from '../pages/Blogs'
import BookMarks from '../pages/BookMarks'
import Content from '../components/Content'
import Author from '../components/Author'

export const router =createBrowserRouter([
    {
      path: '/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/blog',
          element:<Blog />,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:'/blog/:id',
          element: <Blogs/>,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element:<Content/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<BookMarks />,
        }
      ]
    },
  ])