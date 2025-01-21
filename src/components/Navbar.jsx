import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../AppRouter';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    
    <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div className="logo">
      <a href='/'><img src="logo-txt.png" alt="logo" width="100px"/></a>
    </div>
      <ul style={{display:"flex", marginRight:"10px",gap:"20px",alignItems:'center',justifyContent:'center',marginBottom:'0px'}}>
        
        <li>
                <NavLink className="text-decoration-none text-white" to='/' exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none text-white" to='/services' exact activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none text-white" to='/about' exact activeClassName="active">
                  About
                </NavLink>
              </li>
              
              
        <li style={{marginLeft:'0px',display:'flex'}}><SignedIn>
          <Link to='/dashboard' ><p style={{borderRadius:'5px',padding:'3px',backgroundColor:'white',color:'black',marginRight:'10px',marginBottom:"0px"}}>Dashboard</p></Link><UserButton/></SignedIn>
        <SignedOut>
        <SignInButton style={{borderRadius:'5px',fontSize:'1rem',backgroundColor:'white',color:'black',padding:'3px'}}  mode='modal' forceRedirectUrl='/dashboard' />
        </SignedOut></li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;