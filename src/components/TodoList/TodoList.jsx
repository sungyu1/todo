import React, { useState } from 'react'
// TodoList import 불러오기
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({filter}) {
  const [todos,setTodos]=useState([
    {id:'123',text:'React공부하기',status:'active'},
    {id:'124',text:'java공부하기',status:'active'},
  ]);
  //  todos 업데이트 추가 삭제
  const handleAdd=(todo)=>setTodos([...todos,todo]);
  const handleUpdate=(updated)=>
  setTodos(todos.map((todo)=>todo.id===updated.id?updated:todo));
  
  const handleDelete=(deleted)=>
  setTodos(todos.filter((todo)=>todo.id !== deleted.id));

   const filtered = getFilteredItems(todos,filter);
  
    // 새로운 todo 를 받아서 todos에 업데이트해야한다.
  return (
  <section className={styles.container}>
      <ul className={styles.list}>
        {
        filtered.map((item)=>(
        <Todo 
        key={item.id}
        todo={item}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        />
        ))}
      </ul>

      {/* TodoList 불러오기 */}
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>);
}
function getFilteredItems(todos,filter){
  if(filter === 'all'){
    return todos;
  }
  return todos.filter((todo)=>todo.status === filter);
}
