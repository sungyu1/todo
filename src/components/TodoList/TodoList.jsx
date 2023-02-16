import React, { useEffect, useState } from 'react'
// TodoList import 불러오기
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
// Add 추가 저장 
export default function TodoList({filter}) {
  const [todos,setTodos]=useState(()=>
    readTodos());

  //  todos 업데이트 추가 삭제
  const handleAdd=(todo)=>setTodos([...todos,todo]);
  const handleUpdate=(updated)=>
  setTodos(todos.map((todo)=>todo.id===updated.id?updated:todo));
  
  const handleDelete=(deleted)=>
  setTodos(todos.filter((todo)=>todo.id !== deleted.id));

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

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

function readTodos(){
  console.log('readTodos');
  const todos=localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos,filter){
  if(filter === 'all'){
    return todos;
  }
  return todos.filter((todo)=>todo.status === filter);
}
