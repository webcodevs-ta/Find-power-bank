import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Products from './component/Products/Products';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Products></Products>}></Route>
        <Route></Route>
      </Routes>
    </div>

  );
}

export default App;
