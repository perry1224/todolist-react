import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

function handleAddtodo(e) {
const name = todoNameRef.current.value
if (name === '') return 
setTodos(prevTodos => {
  return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
})
todoNameRef.current.value = null
}

  return (
    <>
    <Todolist todos = {todos}/>
    <input ref={todoNameRef} type = "text" />
    <button onClick={handleAddtodo}> Add Todos</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
