import React from 'react';

export default function Panel(props){
    const { headercolor, bordercolor, headertext, text} = props
    
    return (
        <div className="panel" style={{ border: `1px solid ${bordercolor}`, width: '500px', height: '100px', position: 'relative'}}>
            <div className="panel-head" style={{width: '100%', height: '50px', background: headercolor}}>
                {headertext}
            </div>
            <div className="panel-body">
                {text}
            </div>
        </div>

    );
}