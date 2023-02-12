import React, { useState } from 'react'
// TodoList import 불러오기
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todos,setTodos]=useState([
    {id:'123',text:'React공부하기',status:'active'},
    {id:'124',text:'java공부하기',status:'active'},
  ]);
  const handleAdd=(todo)=>setTodos([...todos,todo])
    // 새로운 todo 를 받아서 todos에 업데이트해야한다.
   
  
  return <section>
      <ul>
        {
        todos.map((item)=>(
        <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      {/* TodoList 불러오기 */}
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>;
}
