import { useState } from 'react';
import { addTask, setTask } from './Redux/action';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';

import Task from './Task';
import AddTask from './AddTask';

function App() {




  const tasks = useSelector(state => state.taskReducer.tasks);

  
  
  // console.log(tasks)
 
  // const handleValidate = () => {
  //   const obj = {
  //     id: taskId,
  //     task :{
  //     nameTask,
  //     description,
  //     id : taskId
  //     }}
  //     dispatch(setTask(obj))
  //     setNameTask("");
  //     setDescription("")
  // }
  // const [taskId, setTaskId] = useState("");

      


  return (
    <div className="App">
      <AddTask />

      {tasks.map((task) => {
      return <Task key={task.id} task ={task}  />
        })}
    </div>
  );
}

export default App;

