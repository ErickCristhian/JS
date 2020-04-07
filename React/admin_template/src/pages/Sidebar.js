import React, {useEffect} from 'react';
import Templates from '../containers/routes';

export default function Sidebar(props) {
    useEffect(() => {
        document.getElementById('main-wrapper').classList.toggle('toggled');
        return () => {
            
        }
    }, []);
    
    return (
        <aside id="sidebar">
            
            <div className="sidebar-title">
                <h2>School of Net</h2>
            </div>
            <div className="list-group">
                { Templates.map((route, index) => (
                    <a href={route.path} className="list-group-item">{route.name}</a>
                ))}
                
            </div>
        </aside>
    );
}