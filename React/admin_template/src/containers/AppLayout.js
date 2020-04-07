import React from 'react';
import { Route } from 'react-router-dom';
import Templates from './routes';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';

export default function AppLayout() {
        return (
            <div className="d-flex" id="main-wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <Header />

                        { Templates.map((route, index) => (

                            <div className="content-dynamic">
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact
                                    render ={props => <route.template {...props} /> }/>
                            </div>
                        ))}
               
                </div>
            </div>            
        )
    }