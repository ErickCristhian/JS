import React, {useState, useEffect} from 'react';


export default function Events(){
    const [input, setInput] = useState('teste')
    function clickMe(){
        console.log('ME clicou')
    }
    


    return (
        <div>
            {input}
            <input onChange={e => setInput(e.target.value)} type="text"></input>
            <button onClick={clickMe} type="button">Click me</button>
        </div>
    );
}