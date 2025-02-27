import model from './../../img/hero4.png'
import './welcomeScreen.css'
// import buttonImg from './../../img/button.png'
function WelcomeScreen (){
    return(
        <div className="welcome-screen">
            <div className='Description-of-the-welcome-screen'>
                <h4>Trade in offer</h4>
                <h3>Super value deals</h3>
                <h2>On all products</h2>
                <h6>Save more with Coupons & up to 70% off!</h6>
                <button> Shop now</button>
            </div>
            <img src={model} alt=""className='hero4' />
        </div>
    )
}
export default WelcomeScreen;