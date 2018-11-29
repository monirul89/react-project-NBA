import React, { Component } from 'react';
import './Layout.css';

// component
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Layout extends Component{

    state = {

    }

    render(){
        return(
            <div>
                
                <Header/>
                {this.props.children}
                <Footer/>

            </div>
        )
    }
    
}

export default Layout;