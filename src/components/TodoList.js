import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props;

    return (
      
      <ul className = "list-group mxy-5" >
      <h3 className="text-capitalize text-center font-colorgit">List</h3>
      {items.map(item => {
        return (

          //change
          <TodoItem 
          
          key={item.id} 
          title={item.title}
          handleDelete={() =>handleDelete(item.id)}
          handleEdit={() => handleEdit(item.id)}
        />
        );
      })}

      <button type="button" 
      className="button h5"

      onClick={clearList}
      >Clear List </button>
      </ul>
    );
  }
}
