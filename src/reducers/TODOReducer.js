//import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK} from './todoTypes';
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from '../actions/todoTypes';

const initialState = {
  tasks: [],
};

const TODOReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          {id: Date.now(), text: action.payload, completed: false},
        ],
      };

    case DELETE_TASK:
      return {tasks: state.tasks.filter(task => task.id !== action.payload)};

    case EDIT_TASK:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.taskId
          ? {...task, text: action.payload.newTask}
          : task,
      );
      // console.log('updated tasks :', updatedTasks);
      // tasks: state.tasks.map(task =>
      //   task.id === action.payload.taskId
      //     ? {...task, text: action.payload.newTask}
      //     : task,
      // ),
      return {
        tasks: updatedTasks,
      };

    case COMPLETE_TASK:
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {...task, completed: !task.completed}
            : task,
        ),
      };

    default:
      return state;
  }
};

export default TODOReducer;
