import {useState} from "react";
function ToDoItem({task, toggleComplete, deleteTask, editTask}){
    const [isEditing,setIsEditing]=useState(false);
    const [editText, setEditText]=useState(task.text);
    const handleEdit=()=>{
        editTask(task.id,editText);
        setIsEditing(false);
    };
    return (
        <li className="todo-item">
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />

            {isEditing ?(
               <input type="text"
                 value={editText}
                 onChange={(e)=>setEditText(e.target.value)} 
               />
            ) :(
                <span
                    className={task.completed ? "completed":""}>
                    {task.text}
                </span>
            )}
            <div className="buttons">
                {isEditing ? (
                    <button onClick={handleEdit} className="save">Save</button>
                ) : (
                   <button onClick={() =>setIsEditing(true)} className="edit">Edit</button>
                )}
                <button onClick={()=> deleteTask(task.id)} className="delete">Delete</button>
            </div>
        </li>
    );
}
export default ToDoItem;