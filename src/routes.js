import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'

 import Main from './pages/Main';
 import ProfileDetail from './pages/ProfileDetail'
// import Buy from './pages/buy';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/ProfileDetail/:login" component={ProfileDetail}/>
            {/* <Route path="/buy/:id" component={Buy}/> */} */}
        </Switch>
    </BrowserRouter>
)

export default Routes