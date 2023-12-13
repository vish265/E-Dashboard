import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';





function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            {/*Private component is used bcz if user is not registered he wont get access to other pages of the website */} 
            <Route path="/" element={<Productlist/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/update/:id" element={<UpdateProduct/>}/>
            <Route path="/logout" element={<h1>Logout</h1>}/>
            <Route path="/profile" element={<h1>Prfile</h1>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
