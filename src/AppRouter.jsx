
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import Preader from './pages/Prescriptionreader';
import Docreader from './pages/Docreader';
import Error from './pages/Error';
import './AppRouter.css';



export const routes = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/services', name: 'Services', component: <Products /> },
  { path: '/about', name: 'About', component: <About /> },
];

const AppRouter = () => {
  return (
    <div className='main-body' >
    <BrowserRouter>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/preader' element={<Preader/>}/>
          <Route path='/docreader' element={<Docreader/>}/>
          <Route path='/*' element={<Error/>}/>
          {
            routes.map((route) => {
              return (
                <Route path={route.path} exact element={route.component} />
              );
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

export default AppRouter;