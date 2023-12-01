import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateUser from './Components/CreateUser.jsx'
import Users from './Components/Users.jsx'
import Update from './Components/Update.jsx'


const routers = createBrowserRouter([
  {
    path: "/",
    element: <CreateUser />
  },
  {
    path: "/users",
    element: <Users />,
    loader: ()=> fetch('http://localhost:5000/')
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({params})=> fetch(`http://localhost:5000/user/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
