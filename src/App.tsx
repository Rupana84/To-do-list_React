import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoLists";

//Define the structure of a todo item.
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //To Manage the list of todos.
  const [task, setTask] = useState<string>(""); // To manage the current input value.

  //Fetch data from local storage when the component mounts.
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  //Save data to local storage when the todos state changes.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]);

  //Function to add a new task to the list.  It generates a unique id for each task.  It also saves the updated list to local storage.
  const addTask = () => {
    if (task.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: task.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]); //Add the new todo to the list.
      setTask(""); //Clear the input field.
    } else {
      alert("Please add some text!");
    }
  };

  //Function to toggle the completed status of a task.  It updates the list in local storage.
  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); //Update the list with the updated todos.
  };

  //Function to delete a task from the list.  It updates the list in local storage.
  const deleteTask = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos); //Update the list with the updated todos.
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      {/* Show a message if there are no tasks */}
      <AddTask setTask={setTask} task={task} addTask={addTask} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};
export default App;
