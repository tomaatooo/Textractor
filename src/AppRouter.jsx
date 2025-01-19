
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import Preader from './pages/Prescriptionreader';
import Docreader from './pages/Docreader';
import Error from './pages/Error';
import './AppRouter.css';
import Dashboard from './pages/Dashboard';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Editor from './pages/Editor';



const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home/>}/>
    <Route path='/services' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </>
  )
)
 export const routes = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/services', name: 'Services', component: <Products /> },
  { path: '/about', name: 'About', component: <About /> },
  {path:'/*',component:<Error/>},
  {path:'/dashboard',component:<><SignedIn><Dashboard/></SignedIn><SignedOut><Error/></SignedOut></>},
  { path: '/docreader', component: <Docreader/> },
  { path: '/preader', component: <Preader/> },
  {path:'/editor',component:<><SignedIn><Editor/></SignedIn><SignedOut><Error/></SignedOut></>}
];

const AppRouter = () => {
  return (
    <div className='main-body' >
    <BrowserRouter>
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
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

export default AppRouter;