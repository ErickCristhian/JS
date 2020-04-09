import React, {useState} from 'react';
import TodoForm from './TodoForm';


export default function Todolist() {
    const [items, setItems] = useState([]);
    const [todo, setTodo] = useState('');

    
    const pushToItems = (e) => {
        e.preventDefault();
        setItems([...items, todo]);
        setTodo();
        
    }

    return (
        <div>
            <input type="text" name="todo" placeholder="Enter todo here..." onChange={e => setTodo(e.target.value)}/>
            <button type="button" onClick={pushToItems}>Create</button>
            <TodoForm/>
            <hr/>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


