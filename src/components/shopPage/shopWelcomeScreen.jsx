import './shopWelcomeScreen.css'
import welcomeIMG from './../../img/banner/b1.jpg'
function ShopWelcomeScreen(){
    return (
        <div>
            <img src={welcomeIMG} alt="welcomeIMG" id='ImgOfWelcomeScreen'/>
            <div className="textOverlay">
                <h1>#stayhome</h1>
                <p>save more with coupons & up to 70% off!</p>
            </div>
        </div>
    )
}

export default ShopWelcomeScreen;