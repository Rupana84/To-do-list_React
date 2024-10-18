import React, { useState,useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoLists";
 
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(()=> {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (text:string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id? {...todo, completed:!todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTask = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id!== id);
    setTodos(updatedTodos);
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};
export default App;
