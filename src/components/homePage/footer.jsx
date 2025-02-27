import './footer.css'
import logo from './../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter,faPinterest,faYoutube } from '@fortawesome/free-brands-svg-icons';
import appleStore from'./../../img/pay/app0.jpg'
import playStore from'./../../img/pay/play.jpg'
import payMethods from'./../../img/pay/pay.png'


function Footer(){
    return (
        <div className='bigFooterSection'>
            <div>
                <img src={logo} alt="logo" />
                <div>
                <p className='titleSpace'><b>Contact</b></p>
                <p><b>Address:</b>562 Wellington Road, street32, San Francisco</p>
                <p><b>Phone:</b> +01 2222 356 /(+91)01 2345 6789</p>
                <p><b>Hours:</b>10:00 - 18:00 Mon - Sat</p>
                <b className='socialMediaIcons'>Follow Us</b>
                <FontAwesomeIcon icon={faFacebookF} className='socialMediaIcons'/>
                <FontAwesomeIcon icon={faInstagram} className='socialMediaIcons'/>
                <FontAwesomeIcon icon={faTwitter}   className='socialMediaIcons'/>
                <FontAwesomeIcon icon={faPinterest} className='socialMediaIcons'/>
                <FontAwesomeIcon icon={faYoutube}   className='socialMediaIcons'/>
                </div>
            </div>
            <div>
                <p className='titleSpace'><b>About</b></p>
                <p>About us</p>
                <p>Delivery information</p>
                <p>Privacy policy</p>
                <p>Teams & conditions</p>
                <p>Contact Us</p>
            </div>
            <div>
                <p className='titleSpace'><b>My account</b></p>
                <p>Sign in</p>
                <p>View cart</p>
                <p>My wishlist</p>
                <p>Track my order</p>
                <p>Help</p>
            </div>
            <div>
                <p className='titleSpace'><b>Install app</b></p>
                <p>From App store or Google play</p>
                <img src={appleStore} alt="apple store" className='iconsStyles'/>
                <img src={playStore} alt="playStore" className='iconsStyles' />
                <p>secured payment gateways</p>
                <img src={payMethods} alt="payMethods" className='monyMethods' />
            </div>
        </div>
    )
}
export default Footer;