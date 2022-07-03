function Todo({todo:{text, isCompleted}, index, completedTodo, removeTodo}){
    let todoClassName = "flex mb-1 text-sm py-3 px-2 bg-blue-500 text-white rounded rounded-lg";
    let btnClassName = "btn bg-gray-500 hover:bg-red-700 ml-1 mr-2 text-white-2xl py-2 px-4 rounded";
    if (isCompleted){
        todoClassName += " line-trought";
    }
    
    
    return(
        <>
            <div className={todoClassName}>
                {text}
            </div>
            <div className="relative float-right mt-10 mr-2">
                <button className={btnClassName} onClick={()=>completedTodo(index)}>
                    Completar Tarea
                </button>
                <button className={btnClassName} onClick={()=>removeTodo(index)}>
                    Remover Tarea
                </button>
            </div>
        </>
    )
}
export default Todo;