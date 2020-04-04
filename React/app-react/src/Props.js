import React from 'react'
import Panel from './Panel'

export default function Props(props){
    const { attr, attr2, attr3 } = props
    return (
        <div>
            <h1>{attr},{ attr2},{ attr3}</h1>
            <Panel headercolor="red" bordercolor="red" headertext="This is a header" text="School of Net"/>
            <Panel headercolor="gray" bordercolor="purple" headertext="This is a header" text="School of Net"/>
        </div>
    );
}