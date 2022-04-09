import React from 'react';
import {routes} from './constant';
import {Route,HashRouter,NavLink,BrowserRouter as Router} from 'react-router-dom';

export default function Main ()  {
    return(
        <>
            { routes }
        </>
           
    );
}
