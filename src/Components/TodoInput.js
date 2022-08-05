import React, { useState } from 'react'

const TodoInput = ({addTodos}) => {
  const [currenttodo,setCurrenttodo] = useState("")

  const changeHandler = (e)=>{
       setCurrenttodo(e.target.value);
  }

  const addTodoHandler = ()=>{
    const payload = {
        title: currenttodo,
        status:false
    }
    addTodos(payload)
  }


  return (
    <div>
        <input placeholder='Add Todo' value={currenttodo} onChange={changeHandler} />
        <button onClick={addTodoHandler} >Add Todo</button>
    </div>
  )
}

export default TodoInput