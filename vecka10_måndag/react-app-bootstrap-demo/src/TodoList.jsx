import React, { useState, useRef, useEffect } from 'react';
import './Todo.css'
import {
  Container,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([
    "Learn a new framework",
    "Go for a run",
    "Read a book",
    "Practice coding exercises",
    "Try React challenges",
  ]);
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [todoScroll, setTodoScroll] = useState(true);
  const todoRef = useRef(null);

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    } else {
      setInputError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      addTodo();
    }
  };

  useEffect(() => {
    /* todoScroll is declared as state to scroll on first render to top of page, otherwise ref of new todo  */
    if (todoScroll) {
      window.scrollTo(0, 0);
      setTodoScroll(false);
    } else {
      todoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [todos]);

  return (
    <Card>
      <Card.Header><h5>Todo List</h5></Card.Header>
      <Card.Body>
        <Container>
          <Form.Control
            type="text"
            placeholder="Type a todo"
            value={input}
            onInput={() => setInputError(false)}
            className={`${inputError ? 'border border-danger' : ''}`}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          {inputError && <small className="float-left text-danger">Please enter a todo.</small>}
          <Button variant="primary" onClick={addTodo} className="mt-3 mb-3 w-100">
            Add Todo
          </Button>
          <TodoItem todos={todos} setTodos={setTodos} todoRef={todoRef} />
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TodoList;