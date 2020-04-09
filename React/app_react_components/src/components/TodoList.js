import React from 'react';
import TodoListItem from './TodoListItem';

//StateLess
export default function TodoList(props) {
    const {items, popFromItems} = props;
    return (
        <div>
            <ul className="list-group">
                { items.map((item, index) => (
                    <TodoListItem key={index} index={index} item={item} popFromItems={popFromItems}/>
                ))}
                
            </ul>
        </div>
    );
}

/* StateFull - Import Component from React
export default class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            //Code
        );
    }
}*/

/* StateLess
export const TodoList = (props) => {
    return (
        //Code
    );

}

*/