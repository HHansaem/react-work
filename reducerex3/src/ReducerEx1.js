import { initTodos, reducer } from "./MyReducer"
import {useReducer} from 'react';

const ReducerEx1 = () => {
    const [todos, dispatch] = useReducer(reducer, initTodos);

    return(
        <>
            {
                todos.map(todo=> 
                    <div key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.complate}
                                    onChange={()=>dispatch({type:"COMPLATE", id:todo.id})}/>
                            {todo.title}&nbsp;&nbsp;&nbsp;
                            {todo.count}&nbsp;&nbsp;
                            <button onClick={()=>dispatch({type:"INCREMENT", id:todo.id})}>+</button>
                        </label>
                    </div>
                )
            }
        </>
    )
}

export default ReducerEx1;