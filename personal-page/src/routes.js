import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/index';

const Routes = () =>{

    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/skills">
                <Skills></Skills>
            </Route>
        </Switch>
    </BrowserRouter>
    )

}

export default Routes;