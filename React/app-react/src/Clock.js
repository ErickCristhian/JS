import React from 'react';

export default function Clock(){
    return (
        <h1>
            {
                new Date()
                .toLocaleString('en-US',{
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
            }
        </h1> 
    );
}