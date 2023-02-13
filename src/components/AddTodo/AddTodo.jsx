import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
  const [text,setText]=useState('');
  const handleChange =(e)=>setText(e.target.value);
  const handleSubmit =(e)=>{
    e.preventDefault();
    // 사용자가 input 에 여백을 줬을때 trim 사용 앞뒤여백 없애주기 
    if(text.trim().length===0){
      return;
    }
    onAdd({id: uuidv4(),text:text,status:'active'});
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Add Todo'
      value={text}
      onChange ={handleChange}
      />
      <button>Add</button>
    </form>

  )
}
