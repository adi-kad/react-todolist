import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, removeTodo, setTodos}) => {

    function handleDeleteTodo(todo){
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    function handleCompleteTodo(todo){
      console.log(todo.completed)
      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
            return{
                ...item, completed: !item.completed
            };
          }
        return item;
      }))
    }

    return (  
        <div className="todo-list">
            {todos.map(todo =>{
               return <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
            })}
        </div>
    );
}
 
export default TodoList;