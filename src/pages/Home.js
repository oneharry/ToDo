import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../redux/action';


export const Home = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [newName, setnewName] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);


const handleAdd = (e) => {
    e.preventDefault();
    if(name) {
        dispatch(addTodo(name));
        setName('');
    }
    document.getElementById("form").reset();
  };

  const handleEditTodo = () => {
    if (name.trim() !== '' && editTodoId !== null) {
      dispatch(editTodo(editTodoId, name));
      setnewName('');
      setEditTodoId(null);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditButtonClick = (id, name) => {
    setEditTodoId(id);
    setName(name);
    setnewName(name);
  };

  console.log("H", todos)

  return (
    <div className="container my-4 py-1 border">
        <h2>A Simple ToDo App</h2>
      <form className="mt-3 mb-2" id="form" onSubmit={handleAdd}>
        <div>
            <input
                type="text"
                name="title"
                className="form-control mb-2 mr-sm-3"
                placeholder="Enter todo"
                value={name}
                onChange={(e) =>  setName(e.target.value)}
                />
            </div>
            <div className="col-xl-2">
            {!editTodoId ? (
                  <button className="btn btn-success mb-2" type="submit"> Add Todo </button>
                ) : null}
    
        </div>
      </form>
      <div className="container my-2">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="30%">Name</th>
            <th width="20%">Action</th>
          </tr>
        </thead>

        <tbody>
          {todos && todos.map((todo, index) => (
            <tr>
              <td width="30%">{todo.name}</td>
              <td width="20%">
                {editTodoId === todo.id ? (
                  <button className="btn btn-primary btn-sm" onClick={handleEditTodo}>Update</button>
                ) : (
                  <button className="btn btn-primary btn-sm" onClick={() => handleEditButtonClick(todo.id, todo.name)}>
                    Edit
                  </button>
                )}

                <button className="btn btn-danger btn-sm ml-1" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <a className="text-start" href="https://github.com/oneharry/ToDo.git" target="_blank">Link to github repo</a>
    </div>
  );
};

export default Home;