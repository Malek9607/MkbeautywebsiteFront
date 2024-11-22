import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navb';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './redux/Actions/UserActions';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './Components/ProductList';
import BuyProduct from './Components/BuyProduct';

function App() {
  const [search, setSearch] = useState(''); // Ajout de l'état pour la recherche
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [token]);

  return (
    <div className="App">
      {/* Passer search et setSearch à Navb */}
      <Navb setSearch={setSearch} search={search} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Products' element={<ProductList search={search}/>} />
        <Route path='/BuyProduct' element={<BuyProduct/>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer />
    </div>
  );
}

export default App;





