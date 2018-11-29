import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from './sideNav.css';

const SideNavItems = ()=>{

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'images',
            text: 'Gallery',
            link: '/gallery'
        },
        {
            type: style.option,
            icon: 'blind',
            text: 'Blog',
            link: '/blog'
        },
        {
            type: style.option,
            icon: 'phone-square',
            text: 'Contact Us',
            link: '/contact'
        },
        {
            type: style.option,
            icon: 'address-book',
            text: 'About Us',
            link: '/about'
        },
        {
            type: style.option,
            icon: 'sign-in-alt',
            text: 'Sign In',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out-alt',
            text: 'sign-out',
            link: '/sign-out'
        }
    ]
    const showItems=()=>{
        return items.map( (item,i) =>{
            return(
                <li key={ i } className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </li>
            )
        } )
    }
    return(
        <div className="option">
            <div><h4>MEMUS</h4></div>
            
            {/* <li>
                <Link to="/">
                    <FontAwesome name="home" />
                    Home
                </Link>
            </li> */}
            { showItems() }
        </div>
    )
}

export default SideNavItems;