
export const addTodo = (name) => ({
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      name,
    },
  });
  
  export const editTodo = (id, newName) => ({
    type: 'EDIT_TODO',
    payload: {
      id,
      newName,
    },
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  });
