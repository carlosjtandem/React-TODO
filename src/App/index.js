import './App.css';
import React from 'react';
import AppUI from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Actividad 2', completed: false },
//   { text: 'ptra acttividades', completed: true }
// ]

function useLocalStorage(itemName,initialValue){


  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else { //ya tiene algo el array
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

    // creo una funcion para actualizar mi local storage
    const saveItem= (newItem) => {
      // convertimos en string los todos 
      const stringfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringfiedItem);
      setItem(newItem);
    }

    return [item, saveItem,];
}

function App() {

  const [todos,saveTodos]= useLocalStorage('TODOS_V1',[])


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

