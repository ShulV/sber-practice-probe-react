import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList';
import NoTodos from './Todo/NoTodos';
import AddTodo from './Todo/AddTodo';
import Context from './context'





function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Сдать практику'},
    {id: 2, completed: true, title: 'Бросить политех'},
    {id: 3, completed: false, title: 'Закончить военку'},
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
      }, 2000)
    })
  }, [])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function addTodo(title) {
    return setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title: title,  
        }
      ])
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>ReactTutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <NoTodos />}
      </div>
    </Context.Provider>
  );
}

export default App;
