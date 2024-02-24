import React, { useState } from 'react'
import "./App.css"
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'


function App() {


    const [InputValue, setInputValue] = useState('')

    const [todos, setTodos] = useState([])

    function writeTodo(e) {
        setInputValue(e.target.value)
    }

    function addTodo() {
        if (InputValue != "") {
            setTodos((prevTodos) => [...prevTodos, InputValue])
            setInputValue("")
        }
    }


    function delTodo(todoIndex) {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodos, prevTodosIndex) => {
                return prevTodosIndex != todoIndex
            })
        );
    }


    console.log(todos)

    return (
        <main>
            <h1>To Do List</h1>
            <InputContainer InputValue={InputValue} writeTodo={writeTodo} addTodo={addTodo} />

            <TodoContainer todos={todos} delTodo={delTodo} />


        </main>
    );
}

export default App