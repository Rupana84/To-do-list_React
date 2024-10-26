import React from "react";
import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {      //PropTypes for the component.
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ //The component takes the todos, toggleComplete and deleteTask as props.
  todos,
  toggleComplete,
  deleteTask,
}) => {
  return (       //Render a list of TodoItems for each todo in the todos array.  Each TodoItem has access to the toggleComplete and deleteTask functions.  The key prop is used to uniquely identify
    <ul className ="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
       ))}
    </ul>
  );
};

export default TodoList;
