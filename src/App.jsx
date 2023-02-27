import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './components/home';
import NewProduct from './components/newProduct';
import ListProducts from './components/listProducts';
import UserContextProvider from './context/userContext';
import Logout from './components/logout';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/new_product' element={<NewProduct />}></Route>
        <Route path='/list_products' element={<ListProducts />}></Route>
      </Routes>
      <Footer></Footer>
      </UserContextProvider>
    </div>
  );
}

export default App;
