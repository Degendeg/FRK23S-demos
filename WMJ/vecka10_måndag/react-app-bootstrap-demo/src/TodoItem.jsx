import React, { useState } from 'react'
import {
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Button,
} from 'react-bootstrap'
import Divider from './Divider';

const TodoItem = ({ todos, setTodos, todoRef }) => {
  const [editableIdx, seteditableIdx] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  const removeTodo = (idx) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  const handleTodoClick = (idx) => {
    seteditableIdx(idx);
    setEditedTodo(todos[idx]);
  };

  const handleTodoBlur = () => {
    if (editedTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editableIdx] = editedTodo;
      setTodos(updatedTodos);
    }
    seteditableIdx(null);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Double click to edit
    </Tooltip>
  );

  return (
    <>
      <ListGroup className="mb-4">
        {todos.map((todo, idx) => (
          <ListGroup.Item
            className="border-top rounded text-start mt-1 mb-1"
            key={idx}
            ref={idx === todos.length - 1 ? todoRef : null}
          >
            {editableIdx === idx ? (
              <>
                <Button variant="danger" size="sm"
                  className="float-right position-absolute top-0 end-0 m-1" onClick={() => removeTodo(idx)}>
                  Remove
                </Button>
                <Divider margin="3" />
                <Form.Control
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                  onBlur={handleTodoBlur}
                  onKeyDown={(e) => e.key === 'Enter' && handleTodoBlur()}
                  autoFocus
                />
              </>
            ) : (
              <>
                <Button variant="danger" size="sm"
                  className="float-right position-absolute top-0 end-0 m-1" onClick={() => removeTodo(idx)}>
                  Remove
                </Button>
                <Divider margin="3" />
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                  text="Double click to edit"
                >
                  <span role="button" onDoubleClick={() => handleTodoClick(idx)}>{todo}</span>
                </OverlayTrigger>
                <span className="float-right">{idx + 1}</span>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}
export default TodoItem