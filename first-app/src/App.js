import React from 'react'
import TodoList from './Todo/TodoList';
import NoTodos from './Todo/NoTodos';
import AddTodo from './Todo/AddTodo';





function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Сдать практику'},
    {id: 2, completed: true, title: 'Бросить политех'},
    {id: 3, completed: false, title: 'Закончить военку'},
  ])

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

  return (
    <div className='wrapper'>
      <h1>ReactTutorial</h1>
      <AddTodo onCreate={addTodo}/>
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <NoTodos />}
    </div>
  );
}

export default App;
