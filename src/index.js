import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/main/home.jsx';
import App from './components/main/app';
import Header from './components/header';
import Footer from './components/footer';
import './style/home.css';
import Countries from './components/main/countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Header />
    <Routes>
      <Route  index path='/' element={<App />}/>
      <Route  path='/countries' element={<Countries />}/>

    </Routes>
    <Footer />
  </BrowserRouter>
  
);
