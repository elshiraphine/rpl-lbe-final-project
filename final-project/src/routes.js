import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import Alert from './pages/alert'
import Learn from './pages/learn'

import Header from './components/header'

const Routes=()=>{
    return(
        <Router>
        <Header />
            <Switch>
                <Route exact path="/" component={Alert}/>
                <Route path="/todo" component={Learn}/>

                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    )
}


export default Routes;