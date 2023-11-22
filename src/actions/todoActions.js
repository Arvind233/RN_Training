import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK} from './todoTypes';

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = tasksId => {
  return {
    type: DELETE_TASK,
    payload: tasksId,
  };
};

export const editTask = (tasksId, newTask) => {
  return {
    type: EDIT_TASK,
    payload: {tasksId, newTask},
  };
};

export const completeTask = tasksId => {
  return {
    type: COMPLETE_TASK,
    payload: tasksId,
  };
};
