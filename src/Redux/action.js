import * as types from "./actionTypes"
    
const todosRequest = ()=>{
    return{
        type: types.GET_TODOS_REQUEST,
    };
};
const todosSuccess=(payload)=>{
  return{
    type: types.GET_TODOS_SUCCESS,
    payload
  }
}
const todosError=()=>{
    return{
        type: types.GET_TODOS_FAILURE,
    }
}
const addtodosRequest=()=>{
    return{
        type: types.ADD_TODOS_FAILURE,
    }
}
const addtodosSuccess=()=>{
    return{
        type: types.ADD_TODOS_FAILURE,
    }
}
const addtodosFailure=()=>{
    return{
        type: types.ADD_TODOS_FAILURE,
    }
}

const toggleTodoRequest = () =>{
    return { type:types.TOGGLE_TODO_REQUEST}
}
const toggleTodoSuccess = (payload) =>{
    return { type:types.TOGGLE_TODO_SUCCESS, payload}
}
const toggleTodoFailure = () =>{
    return { type:types.TOGGLE_TODO_FAILURE}
}


const removeTodoRequest = () =>{
    return { type:types.REMOVE_TODO_REQUEST}
}
const removeTodoSuccess = (payload) =>{
    return { type:types.REMOVE_TODO_SUCCESS, payload}
}
const removeTodoFailure = () =>{
    return { type:types.REMOVE_TODO_FAILURE}
}



    export {todosError,todosSuccess,todosRequest,addtodosRequest,addtodosFailure,addtodosSuccess,toggleTodoRequest,toggleTodoSuccess,toggleTodoFailure,removeTodoRequest ,removeTodoSuccess,removeTodoFailure }