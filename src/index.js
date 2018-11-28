import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routers from './Routers';
import Home from './Components/Home/Home';

const App =()=>{
    return(
        <BrowserRouter>
            <div>
                <Routers />
                <Home />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));