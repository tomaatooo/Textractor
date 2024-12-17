import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../AppRouter';

const Navbar = () => {
  return (
    
    <nav className='mb-4' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div className="logo">
      <a href='/'><img src="logo-txt.png" alt="logo" width="100px"/></a>
    </div>
      <ul style={{display:"flex", marginRight:"20px",gap:"30px"}}>
        {
          routes.map((route, index) => {
            return (
              <li className='mt-2' key={index}>
                <NavLink className="text-decoration-none text-white" to={route.path} exact activeClassName="active">
                  {route.name}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;