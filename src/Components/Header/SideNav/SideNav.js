import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_Items';

const SideNavigetion = (props)=>{
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
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigetion;