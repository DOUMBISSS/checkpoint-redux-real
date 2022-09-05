import {useSelector} from 'react-redux';
import './App.css';

import Task from './Task';
import AddTask from './AddTask';

function App() {

  const tasks = useSelector(state => state.taskReducer.tasks);

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

