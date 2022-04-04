import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <Routes>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>

  );
}

export default App;
