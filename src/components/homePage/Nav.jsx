import logo from './../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping}from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

import './nav.css'
function Nav (){
return(
    <div className='nav'>
        <img src={logo} alt="logo" id='firstIconInPage' />
        {/* <div className='nav-Buttons'> */}
            <ul>
            <li><Link to='/home'>Home</Link></li>
                <li ><Link to='/shop'>Shop</Link></li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li> <FontAwesomeIcon icon={faBagShopping} /></li>
            </ul>
            {/* <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'>Home</a>
            <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'>Shop</a>
            <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'>Blog</a>
            <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'>About</a>
            <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'>Contact</a>
            <a href='https://www.w3schools.com/css/css3_flexbox_items.asp#'><FontAwesomeIcon icon={faBagShopping} style={{color: "#B197FC",}} /></a> */}
        {/* </div> */}
    </div>
)
}
export default Nav;