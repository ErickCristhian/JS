import React from 'react';

export default function TodoListItem(props) {
    const {item, index, popFromItems} = props;
    function onRemove() {
        popFromItems(index);
    }
    
    return (
        <li className="list-group-item">
            {item}
            <button type="button" className="btn btn-danger" onClick={onRemove}>X</button>
        </li>
    );
}