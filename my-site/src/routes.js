import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const Routes = () =>{

    return(
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
    )
}

export default Routes;