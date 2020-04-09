import React, { useState } from 'react';

export default function TodoForm(props){
    const { pushToItems } = props;
    const [todo, setTodo] = useState('');


    function onAdd(e){
        e.preventDefault();
        pushToItems(todo);
        setTodo('');
    }
    
    return (
        <div>
            <div className="form-group">
                <input className="form-control" type="text" value={todo} name="todo" placeholder="Enter todo here..." onChange={e => setTodo(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="button" onClick={onAdd}>Create</button>
            </div>
        </div>
    );
}