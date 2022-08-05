import * as types from "./actionTypes"


const initialState = {
    counter : 1,
    todos:[],
    isLoading:false,
    isError:false
}


const reducer = (oldState=initialState,action) =>{
    const {type,payload} = action;
    switch(action.type){
        case types.GET_TODOS_REQUEST:
            return {...oldState,isLoading:true,isError:false};
        case types.GET_TODOS_SUCCESS:
            return {...oldState,isLoading:false, todos:[...payload],isError:false};
        case types.GET_TODOS_FAILURE:
            return {...oldState,isError:true,isLoading:false};
            case types.TOGGLE_TODO_REQUEST:
                return{
                    ...oldState,
                    isLoading:true,
                    isError:false,
                };
              case types.TOGGLE_TODO_SUCCESS:
                var newToggleTodos = oldState.todos.map((item)=>
                    item.id === payload.id ? payload : item
                );
                return{
                    ...oldState,
                    todos: newToggleTodos,
                    isLoading:false,
                    isError:false,
                };
              case types.TOGGLE_TODO_FAILURE:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:true,
                }
            
                case types.REMOVE_TODO_REQUEST:
                return{
                    ...oldState,
                    isLoading:true,
                    isError:false,
                };
              case types.REMOVE_TODO_SUCCESS:
                var leftTodos = oldState.todos.filter((item)=> item.id !== payload);
                return{
                    ...oldState,
                    todos: leftTodos,
                    isLoading:false,
                    isError:false,
                };
              case types.REMOVE_TODO_FAILURE:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:true,
                }
        default:
            return oldState;
    }
}

export {reducer}