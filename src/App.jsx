import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './components/home';
import NewProduct from './components/newProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/new_product' element={<NewProduct />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
