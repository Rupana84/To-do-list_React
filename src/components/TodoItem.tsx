import React from "react";
import{Todo} from "../App";


interface TodoItemProps {
    todo : Todo; 
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo , toggleComplete, deleteTask }) => {
    return (
        <li className={todo.completed ? "completed" : ""}>
            <span onClick={()=>toggleComplete(todo.id)}>
                {todo.text}
                </span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
