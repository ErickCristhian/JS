import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ContainerApp from '../components/ContainerApp';
import { WelcomeMessage } from '../components/Message';
import { getTodos } from '../API';

export default function TodoListApp(props) {
    const [items, setItems] = useState([]);
    
    useEffect(async () => {
        const response = await getTodos();
        setItems(response.data)
        
        //fetch('https://jsonplaceholder.typicode.com/todos')
          //  .then(response => response.json())
            //.then(data => setItems(data))
    }, [])

    const pushToItems = (todo) => {
        setItems([...items, todo])
    }

    const popFromItems = (index) => {
        items.splice(index, 1);
        setItems([...items]);
    }
    
    return (
        <ContainerApp>
            <div className="col-xs-12 col-md-12">
                <WelcomeMessage/>
                <TodoForm pushToItems={pushToItems}/>
                <hr/>
                <TodoList items={items}  popFromItems={popFromItems}/>
            </div>
        </ContainerApp>
    );
}