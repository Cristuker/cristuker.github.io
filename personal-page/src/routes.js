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
            <Route exact path="/" component={Home} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/messages" component={Messages} />
        </Switch>
    </BrowserRouter>
    )

}

export default Routes;