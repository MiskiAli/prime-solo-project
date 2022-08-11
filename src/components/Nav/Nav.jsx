import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
// ---imports---
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/homepage">
        <h2 className="nav-title">Nasri & Nasib</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            

            <Link className="navLink" to="/homepage">
            <HomeIcon />
            </Link>

            <Link className="navLink" to="/wishlist">
            <FavoriteIcon />
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <Link className="navLink" to="/admin">
              Admin Page
            </Link>
            
            <Link className="navLink" to="/user">
              profile page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
