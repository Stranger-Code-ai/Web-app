import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import {Home, List, Media, Subject, JeeList} from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='subject' element={<Subject/>}/>
      <Route path='list' element={<List/>}/>
      <Route path='media' element={<Media/>}/>
      <Route path='jeetips' element={<JeeList/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
)
