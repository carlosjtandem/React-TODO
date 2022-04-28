import './App.css';
import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from './TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Actividad 2', completed: false },
//   { text: 'ptra acttividades', completed: true }
// ]



function App() {



  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

