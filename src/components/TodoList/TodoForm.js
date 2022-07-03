import { useState } from "react";

function TodoForm({addTodo}){
    const [value, setValue] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!value){
            return;
        } else {
            addTodo(value);
            setValue("");
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="text-black" type="text" value={value} onChange={event=>setValue(event.target.value)} />
            </form>
        </div>
    )
}
export default TodoForm;