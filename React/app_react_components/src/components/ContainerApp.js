import React from 'react';

export default function ContainerApp(props) {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </main>
    );
}
