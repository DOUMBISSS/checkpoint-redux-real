import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteTask, selectTask } from './Redux/action';


const Task = ({task,setNameTask, setDescription,setTaskId}) => {

    const handle = () => {
      setNameTask(task.nameTask);
      setDescription(task.description);
      setTaskId(task.id)
    }
    const dispatch = useDispatch();

    const delTask = (taskId) =>{
      dispatch(deleteTask(taskId));
    }

    const select = (id)=>{
      dispatch(selectTask(id));
    }
      
    return (
        <div key={task.id} className='task--container'>
            {/* <div className='task--container--header'>
            <div className='name--part'>
                    <h4>Name</h4>
                </div>
                <div className='description--part'>
                    <h4>Description</h4>
                </div>
                <div className='modify--part'>
                    
                </div>
            </div> */}
       <div className='task'>
            <div className='task--name'>
            <h3>{task.nameTask}</h3>
            </div>
            <div className='task--description'>
              <h3>{task.description}</h3>
            </div>
            <div className='task--modify'>
              <button className='modify' onClick={()=>select(task.id)}>Modifier</button>
              <button className='delete' onClick={()=>delTask(task.id)}>Supprimer</button>
            </div>
        </div>
         
      </div>
    );
}

export default Task;
