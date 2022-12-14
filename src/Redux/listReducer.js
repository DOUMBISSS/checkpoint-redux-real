
const initialState = {
    
    tasks : [
    {   nameTask: 'Learn React',
        description: 'lesson API , Redux , and NODEjs',
        id:1,
    },

    {   nameTask: 'Learn Intro Web',
        description: 'lesson HTML , CSS , JS and ES6',
        id:2,
    },

    {   nameTask: 'Learn Database',
        description: 'lesson MongoDB , Express.js',
        id:3,
    },


   
], 


selectedTask : {}


}

export function taskReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD-TODO":{
            return {...state, tasks : [...state.tasks, action.payload]}
        }

        case "SELECT-TASK":{
            let newState = [...state.tasks] 
            let task = newState.find(task => task.id == action.payload);
            return {...state, selectedTask : task};
        }
        case "SET-TASK":{
           
            let newState = [...state.tasks] 
            let index = newState.findIndex(task => task.id == action.payload.id);
            newState[index] = action.payload;
            return {...state, tasks : newState};
        }
        case "DELETE-TASK" :{
            let newState = [...state.tasks] 
            let index = newState.findIndex(task => task.id == action.payload);
            newState.splice(index, 1);
            return {...state, tasks: [...newState]};
        }
        default: {
            return state;
        }
    }
   
}