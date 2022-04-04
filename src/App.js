import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import NotFound from './component/NotFound/NotFound';
import AllReviews from './component/AllReviews/AllReviews';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Products></Products>}></Route>
        <Route path='/reviews' element={<AllReviews></AllReviews>} ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>

  );
}

export default App;
