import './App.css';
import React from 'react';
import AppUI from './AppUI';
import { useLocalStorage } from './hooks/useLocalStorage'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Actividad 2', completed: false },
//   { text: 'ptra acttividades', completed: true }
// ]



function App() {

  const { item: todos, saveItem: saveTodos, loading,error } = useLocalStorage('TODOS_V1', [])


  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }




  const completeTodo = (text) => {
    // encontrar la posicion del index para cambiar el estado
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  }

  const deleteTodo = (text) => {
    // encontrar la posicion del index para cambiar el estado
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos.splice([todoIndex], 1);
    saveTodos(newTodos);
  };

  console.log('render');


  //se ejecutara cuando cumpla cierta condicion
  React.useEffect(() => {
    console.log('use efect');
  })


  console.log('post render');

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

