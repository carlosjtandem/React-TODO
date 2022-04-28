
import './App.css';
import React from 'react';
import AppUI from './AppUI'





const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Actividad 2', completed: false },
  { text: 'ptra acttividades', completed: true }
]

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else { //ya tiene algo el array
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  // creo una funcion para actualizar mi local storage
  const saveTodos = (newTodos) => {
    // convertimos en string los todos 
    const stringfiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringfiedTodos);
    setTodos(newTodos);
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
  }

  return (
    <AppUI
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

