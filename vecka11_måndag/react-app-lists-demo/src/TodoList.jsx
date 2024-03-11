// Definition of TodoList functional component
const TodoList = ({ todos, completeTodoHandler, uuid }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div className="todo-wrapper" key={uuid()}> {/* Generating unique key using uuid */}
          <li>
            <strong>Titel:</strong> {todo.title} {/* Displaying todo title */}
          </li>
          <li>
            <strong>UserId:</strong> {todo.userId} {/* Displaying todo userId */}
          </li>
          <li>
            {todo.completed ? (
              <span style={{ color: 'green' }}>Completed ✅</span>
            ) : (
              <span style={{ color: 'red' }}>Incomplete ❌</span>
            )}
            <br />
            <button onClick={() => completeTodoHandler(todo.id)}>Complete</button> {/* Button to complete todo */}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
