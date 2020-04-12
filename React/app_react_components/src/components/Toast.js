import React, { useState, useEffect } from 'react';

export default function Toast(props) {
    const { message, delay, color } = props;
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, delay)
    }, [])
    return (
        <div className={color}>
            {visible ?
                <h4>{message}</h4>
                : <span></span>
            }
        </div>
    );
}