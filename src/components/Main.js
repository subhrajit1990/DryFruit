import React from 'react';
import {routes} from './constant';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import {Route,HashRouter,NavLink,BrowserRouter as Router} from 'react-router-dom';

export default class Main extends React.Component {
    render() {
    	console.log("Routing");
        return(
            <div className="routerClass">
                { routes }
            </div>
        );
    } 
}
