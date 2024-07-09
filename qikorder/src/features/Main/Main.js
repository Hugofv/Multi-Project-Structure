import React, { memo, Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.location.hash) {
      navigate('/main/menu');
    }
  }, []);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <ul className='navbar__nav'>
          <a className='navbar__nav__item navbar__nav__item--active' href='#'>
            Menu
          </a>
          <a className='navbar__nav__item' href='#'>
            Sign In
          </a>
          <a className='navbar__nav__item' href='#'>
            Contact
          </a>
        </ul>
      </nav>
      <header className='header'>
        <h1 className='header__logo'>
          <img src='images/qikserve.svg' alt='QikServe' />
        </h1>
      </header>
      <div className='container'>
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default memo(Main);
