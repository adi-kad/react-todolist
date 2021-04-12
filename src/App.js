import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'localTodos'

function App() {

  const [todos, setTodos] = useState([]); 

  //Getting locally saved todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodos(storedTodos);
  }, []);

  //Saving todos locally
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  console.log(todos.length);

  return (
    <div className="App">        
      <h1>To Do Application</h1>
      <div className="todo-container">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>     
    </div>
  );
}

export default App;
