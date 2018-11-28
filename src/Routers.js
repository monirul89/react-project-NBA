import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home.js';


class Routers extends Component{
    render(){
        return(
            <Switch>
                
                <Route path="/" exact component={Home}/>
                
            </Switch>
        )
    }
}

export default Routers