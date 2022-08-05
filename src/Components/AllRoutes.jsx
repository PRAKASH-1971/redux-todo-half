import React from 'react'
import {Route,Routes} from "react-router-dom"
import EditTodo from './EditTodo'
import SingleTodo from './SingleTodo'
import Todos from './Todos'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todos/>}></Route>
        <Route path="/todo/:id" element={<SingleTodo/>}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>
    </Routes>
  )
}

export default AllRoutes