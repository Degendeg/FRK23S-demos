import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { ThreeDots } from 'react-loader-spinner'; // Importing ThreeDots loader component
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library

function App() {
  const [todos, setTodos] = useState([]); // Initializing state variable 'todos' with empty array

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data));
    };

    setTimeout(() => {
      getData(); // Calling getData function after a delay of 3000 milliseconds (3 seconds)
    }, 3000);
  }, []); // Runs once when the component is rendered

  const completeTodoHandler = (todoId) => {
    // Function to handle completion of todo
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ); // Updating completed status of todo
    setTodos(updatedTodos);
  };

  return (
    <>
      {todos.length > 0 ? ( // Conditional rendering based on todos length
        <TodoList todos={todos} completeTodoHandler={completeTodoHandler} uuid={uuidv4} /> // Rendering TodoList component with todos and event handler
      ) : (
        <ThreeDots // Rendering ThreeDots loader component while data is being fetched
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      )}
    </>
  );
}

export default App;
