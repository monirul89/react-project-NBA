import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNavigetion = (props)=>{
    console.log(props)
    return(
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav = {props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px',
                    color:'#fff'
                }}>
                <div><h4 style={{textAlign:'center', marginTop: '10px'}}>MEMUS</h4></div>
                <div>Home</div>
                <div>News</div>
            </SideNav>
        </div>
    )
}

export default SideNavigetion;