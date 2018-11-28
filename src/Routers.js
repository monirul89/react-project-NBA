import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Layout from './hoc/Layout/Layout';

class Routers extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routers