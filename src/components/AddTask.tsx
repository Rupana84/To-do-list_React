import React from "react";

interface AddTaskProps {
  setTask: (task: string) => void; //Function to update the input value.
  task: string;        //The current input value.
  addTask: () => void;        //Function to add a new task.  It is called when the user clicks the add button.  It also updates the input value.  It checks if the input value is not empty before adding
}

const AddTask: React.FC<AddTaskProps> = ({ setTask, task, addTask }) => {  //Render the input field and add button.
  return (
    <div className="input-section">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} //Update the input value when it changes.
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>{" "}
      {/*When the user clicks the add button, call the addTask function.*/}
    </div>
  );
};

export default AddTask;
