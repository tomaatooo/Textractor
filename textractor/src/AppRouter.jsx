
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

export const routes = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/about', name: 'About', component: <About /> },
];

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <div className='container'>
        <Routes>

          {
            routes.map((route) => {
              return (
                <Route path={route.path} exact element={route.component} />
              );
            })
          }
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;