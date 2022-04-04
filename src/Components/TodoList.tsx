import React from 'react'
import { Itask } from '../Interface/Interfaces'

interface props{
  task:Itask,
  deleteTask(taskNameToDelete:string):void
}

function TodoList({task,deleteTask}:props) {
  return (
    <div className='Todo'>
      <div>{task.taskName}</div>
      <button onClick={()=>deleteTask(task.taskName)}>X</button>
    </div>
  )
}

export default TodoList