import React from 'react'
import TodoList from './Todo/TodoList';
import NoTodos from './Todo/NoTodos';





function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: true, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className='wrapper'>
      <h1>ReactTutorial</h1>
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <NoTodos />}
    </div>
  );
}

export default App;
