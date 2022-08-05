import axios from 'axios'
import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import {useDispatch,useSelector,shallowEqual} from "react-redux"
import {addtodosFailure, addtodosRequest, addtodosSuccess, todosError,todosRequest,todosSuccess} from "../Redux/action"
import {Link} from "react-router-dom"

const Todos = () => {
    const dispatch =  useDispatch() ;
const {todos,isLoading,isError} = useSelector((store)=>{ return{
    todos: store.todos,
    isLoading:store.isLoading,
    isError:store.isError
}
},shallowEqual)  // it avoids rerendering if objects are same
console.log(todos);


    const getTodos = ()=>{
        dispatch(todosRequest())
        return axios
        .get("http://localhost:8080/todos")
        .then((r)=>{
            // console.log(r.data)
            dispatch(todosSuccess(r.data))
        })
        .catch((e)=>{
            dispatch(todosError())
        })
    }
    const addTodos = (payload)=>{
        dispatch(addtodosRequest())
        return axios
        .post("http://localhost:8080/todos",payload)
        .then((r)=>{
            // console.log(r.data)
            dispatch(addtodosSuccess())
        })
        .catch((e)=>{
            dispatch(addtodosFailure())
        })
    }

    const handleaddTodos = (payload)=>{
    addTodos(payload).then(()=>getTodos())
    }

const handleDelete = (item)=>{
    todos.reduce((x) => x.id !== item.id)
    console.log("delete")
}


    useEffect(()=>{
        getTodos();
    },[])
   
    // console.log("rendering")

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput addTodos={handleaddTodos}/>
        {todos.length > 0 && 
        todos.map((item)=>{
            return( 
                <div>
            <Link to={`/todo/${item.id}`} key={item.id}>
<div key={item.id}>
{item.title}</div>
</Link>
            
            </div>
            )
        })}
    </div>
  )
}

export default Todos