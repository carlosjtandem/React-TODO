
import React, { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = useState(initialValue);

    // hook para simular que se demora la carga da datos de una API
    React.useEffect(
        () => {
            try {
                setTimeout(() => {
                    const localStorageItem = localStorage.getItem(itemName);
                    let parsedItem;
                    if (!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify(initialValue));
                        parsedItem = [];
                    } else { //ya tiene algo el array
                        parsedItem = JSON.parse(localStorageItem);
                    }

                    setItem(parsedItem)
                    setLoading(false);
                }, 4000);
            } catch (error) {
                setError(error)
            }

        }
    )

    // creo una funcion para actualizar mi local storage
    const saveItem = (newItem) => {
        // convertimos en string los todos 
        try {
            const stringfiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringfiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error)
        }
    }

    return { item, saveItem, loading, error};
}

export { useLocalStorage }