import React from 'react';
import{BsTrashFill} from 'react-icons/bs';

export default function Todo({todo,onUpdate,onDelete}) {
  //  text,status 를 todo obj 받아오기 
  const{text,status}=todo;
  const handleChange=(e)=>{
    const status = e.target.checked ? 'completed':'active';
    onUpdate({...todo,status:status});
  }
  // handleDelete 
  const handleDelete=()=> onDelete(todo);
  return (
   <li>
      <input 
      type='checkbox' 
      id='checkbox' 
      // todo.status 있어야하나 위에 const에 받았으므로 todo생략
      checked={status === 'completed'}
      onChange={handleChange}
      /> 
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleDelete}>
        <BsTrashFill/>
      </button>
   </li>
  )
}
