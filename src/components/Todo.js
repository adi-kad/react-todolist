import React from 'react';
import { HiX, HiCheck } from "react-icons/hi";

const Todo = ({todo, handleDeleteTodo, handleCompleteTodo}) => {
    return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div className="task">{todo.task}</div>
            <div className="task-options">
            <HiCheck className={`task-option ${todo.completed ? "checked" : ""}`}  onClick={() => {handleCompleteTodo(todo)}}/>
            <HiX className="task-option-delete" onClick={() => {handleDeleteTodo(todo)}}/> 
            </div>                       
        </div>
      );
}
 
export default Todo;
