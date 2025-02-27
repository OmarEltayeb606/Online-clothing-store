import WelcomeScreen from "../components/homePage/welcomeScreen.jsx";
import Sections from '../components/homePage/sections.jsx';  
import FeaturedProducts from '../components/homePage/featured-products.jsx';
import DiscountsPart from'../components/homePage/discountsPart.jsx';
import NewProducts from'../components/homePage/new-products.jsx';
import BigOffer from '../components/homePage/bigOffer.jsx';
import SmallOffer from "../components/homePage/smallOffer.jsx";
import SignUp from "../components/homePage/sign-up.jsx";
import Footer from '../components/homePage/footer.jsx'
function Home (){
return(
    <div>
        <WelcomeScreen/>
        <Sections/>
        <FeaturedProducts/>
        <DiscountsPart/>
        <NewProducts/>
        <BigOffer/>
        <SmallOffer/>
        <SignUp/>
        <Footer/>
    </div>
)
}
export default Home;