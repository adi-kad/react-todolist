import React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiArrowNarrowRight } from "react-icons/hi";


const TodoForm = ({addTodo}) => {    
    const taskInput = useRef();

    function handleSubmit(e){
        e.preventDefault();         
        if(!taskInput.current.value.trim()){
           return;
        }else{
            addTodo({
                id: uuidv4(),
                task: taskInput.current.value,
                completed: false
            });
            taskInput.current.value = "";
        }        
    }

    return (  
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" ref={taskInput} placeholder="New todo"/>
                <button type="submit"><HiArrowNarrowRight/></button>
            </form>
        </div>
    );
}
 
export default TodoForm;
