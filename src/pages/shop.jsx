import ShopWelcomeScreen from'./../components/shopPage/shopWelcomeScreen.jsx'
import ShopProducts from "../components/shopPage/shopProdcuts.jsx";
import SignUp from'./../components/homePage/sign-up.jsx'
import Footer from'./../components/homePage/footer.jsx'
function Shop(){
    return (
        <div>
                    <ShopWelcomeScreen/>
                    <ShopProducts/>
                    <SignUp/> 
                    <Footer/>
        </div>
    )
}
export default Shop;