import React, { FC, useState } from 'react';
import './App.css';
import { Itask } from './Interface/Interfaces';
import TodoList from './Components/TodoList';

const App :FC =()=> {
  const [task,setTask]=useState<string>("")
  const [taskList,setTaskList]=useState<Itask[]>([])
  const addTask=():void=>{
    const newTask={taskName:task};
    setTaskList([...taskList,newTask])
  }
  const deleteTask=(taskNameToDelete:string):void=>{
    setTaskList(
      taskList.filter((task)=>{return task.taskName!==taskNameToDelete})
    )
  }
  return (
    <div className="App">
      Welcome to againTasks
      <div>
        <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder='Enter the task'/>
        <button onClick={addTask}>Enter</button>
      </div>
      <div>
        <span>Todolist</span>
        {taskList.map((task:Itask,key:number)=>{
          return <TodoList key={key} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
