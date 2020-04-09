import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ContainerApp from '../components/ContainerApp';


export default function TodoListApp(props) {
    const [items, setItems] = useState([]);
    
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
                <h2>Todolist</h2> 
                <TodoForm pushToItems={pushToItems}/>
                <hr/>
                <TodoList items={items}  popFromItems={popFromItems}/>
            </div>
        </ContainerApp>
    );
}