import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/main/home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route  index path='/' element={<Home />}/>

    </Routes>
  </BrowserRouter>
  
);
