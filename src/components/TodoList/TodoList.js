import { useState } from "react";
import EmptyList from "./EmptyList";
import TodoForm from "./TodoForm";
import Todo from "./TodoForm";

function TodoList(){
    const [todos, setTodos] = useState([]);
    const addTodo = (text)=>{
        setTodos([...todos, {text, isCompleted:false}]);
    }
    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }
    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return(
        <div className="w-90 mx-auto mt-5">
            <div>
                <TodoForm addTodo={addTodo}/>
                {
                    todos.length === 0 ? (
                        <EmptyList/>
                    ):(
                        todos.map((todo, index) => (
                                <Todo 
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                    removeTodo={removeTodo}

                                />
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}
export default TodoList;