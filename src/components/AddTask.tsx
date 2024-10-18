import React,{useState} from "react";

interface AddTaskProps {
    addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [task, setTask] = useState<string>("");

    const handleAddTsak = () => {
        if(task.trim() !== "") {
            addTask(task.trim());
            setTask("");
    } else {
        alert("Please add some text!");
    }
};
    return (
        <div className="input-section">
            <input 
            type="text"
            value= {task}
            onChange={e=> setTask(e.target.value)}
            placeholder="Add a new task"
            />
            <button onClick={handleAddTsak}>Add</button>
            </div>
    );
};

export default AddTask;