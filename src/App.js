import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]); 

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  console.log(todos.length);

  return (
    <div className="App">        
      <h1>React Todo Application</h1>
      <div className="todo-container">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>     
    </div>
  );
}

export default App;
