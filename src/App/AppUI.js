import React from 'react';
import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import CreateTodoButton from '../CreateTodoButton';


function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />


            <TodoList>
            {error && <p>ERROR..!</p>}
                {loading && <p>Estamos cargando no desesperes..</p>}
                {(!loading && !searchedTodos.lenght) && <p>Crea tu primer TODO</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList >
            <CreateTodoButton />
        </React.Fragment>

    )
}

export default AppUI 