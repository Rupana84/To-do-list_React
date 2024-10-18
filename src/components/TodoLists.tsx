import React from "react";
import TodoItem from "./TodoItem";
import{Todo} from "../App";


interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTask }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo ={todo}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TodoList;