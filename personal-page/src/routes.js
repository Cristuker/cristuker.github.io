import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/index';
import Contact from './pages/Contact/index';
import About from './pages/About/index';
import Messages from './pages/Messages/index';
import Home from './pages/Home/index';

const Routes = () =>{

    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/Home">
                <Home></Home>
            </Route>
            <Route exact path="/skills">
                <Skills></Skills>
            </Route>
            <Route exact path="/contact">
                <Contact></Contact>
            </Route>
            <Route exact path="/about">
                <About></About>
            </Route>
            <Route exact path="/messages">
                <Messages></Messages>
            </Route>
        </Switch>
    </BrowserRouter>
    )

}

export default Routes;