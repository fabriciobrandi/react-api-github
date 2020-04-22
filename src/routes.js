import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Main from './pages/Main';
import ProfileDetail from './pages/ProfileDetail'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/ProfileDetail/:login" component={ProfileDetail}/>
        </Switch>
    </BrowserRouter>
)

export default Routes