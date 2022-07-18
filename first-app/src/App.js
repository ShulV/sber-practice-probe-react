import TodoList from "./Todo/TodoList";

function toggleTodo(id) {
  console.log('toggle todo', id)
}

function App() {
  const todos=[
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ]

  return (
    <div className='wrapper'>
      <h1>ReactTutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
