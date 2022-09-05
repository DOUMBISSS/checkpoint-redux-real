import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTask } from "./Redux/action";
import { uid } from 'uid';


function AddTask (){

    
  const [nameTask, setNameTask] = useState("");
  const [description, setDescription] = useState("");
  const [modify , setModify] = useState(false);
  const dispatch= useDispatch();

  const selectedTask = useSelector(state => state.taskReducer.selectedTask);

  useEffect(()=>{
    setDescription(selectedTask.description);
    setNameTask(selectedTask.nameTask);
    setModify(true);
  }, [selectedTask])

    const handleName = (event) =>{
        setNameTask(event.target.value)
      }
      const handleDescription = (event) =>{
        setDescription(event.target.value)
      }

      const handleAdd = ()=>{
        dispatch(addTask({
          id : uid(),
          nameTask,
          description
        }))
        setDescription('');
        setNameTask("");
      }

      const handleSet = (id) =>{
      
          dispatch(setTask({
            id,
            nameTask,
            description
          }));
          setDescription('');
          setNameTask("");
          setModify(false)
      }


            return(
                <div className="header--list">
               <input type="text" placeholder="Name task" onChange={handleName} value={nameTask}/>
                <input type="text" placeholder="description" onChange={handleDescription} value={description}/>
               {modify ? <button className="btn--add" onClick={()=>handleSet(selectedTask.id)}>Modifier</button> : <button className="btn--add" onClick={handleAdd}>Ajouter</button>} 
                {/* <button className="btn--add" onClick={handleValidate}>Valider</button> */}
            </div>
            );
}


export default AddTask;