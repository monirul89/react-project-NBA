import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routers from './Routers'

const App =()=>{
    return(
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));