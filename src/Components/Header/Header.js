import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';


const Header = ()=>{

    const logo = ()=>{
        return(
            <Link to="/" className="logo">
                <img alt="Nba Logo" src="images/nba_logo.png"/>
            </Link>
        )
    }

    return(
        <header className="header">
            <div className="headerOpt">
                {logo()}
            </div>
        </header>
    )
}
export default Header;