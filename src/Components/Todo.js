import React, { useState } from "react";
import CloseIcon from "../Icons/icons8_delete.ico";
import EditIcon from "../Icons/icons8_edit_file.ico";
import TodoForm from "./TodoForm";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });


  const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: "",
      })
  }

  if(edit.id ){
      return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, key) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={key}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <img
          src={CloseIcon}
          alt=""
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        ></img>
        <img
          src={EditIcon}
          alt=""
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        ></img>
      </div>
    </div>
  ));
}
