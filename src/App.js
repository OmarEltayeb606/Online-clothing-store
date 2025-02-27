import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/homePage/Nav.jsx'
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import ProductDetails from'./components/shopPage/productDetails.jsx'
import {CurrentData} from'./components/data/data.jsx'
import ErrorBoundary from'./errorsCatcher.jsx'

function App() {
  return (
    <ErrorBoundary>
      <CurrentData>
        <Router>
          <div className="App">
            <Nav/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/shop' element={<Shop/>}/>
              <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            </Routes>
          </div>
        </Router>
      </CurrentData>
    </ErrorBoundary>
  );
}

export default App;
