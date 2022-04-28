import React from 'react';
import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import CreateTodoButton from '../CreateTodoButton';
import { TodoContext } from './TodoContext';

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => {
                    return (
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
                    )
                }}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>

    )
}

export default AppUI 