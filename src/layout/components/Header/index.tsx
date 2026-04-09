// File: Header/index.tsx
// Navigation header for OCCTIVE

import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import HeaderMenu from '../../../assets/HeaderMenu.svg';
import { pages } from '../../../vars';
import './style.scss';

const Header: React.FC = () => {
  /* Controls visibility of the mobile navigation menu */
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {/* Header landmark identifies site-wide banner */}
      <header className="header">
        {/* Skip link — first tabbable element on every page */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="header-content">
          <Link to="/" onClick={closeMenu}>
            <img
              className="header-logo"
              src={`${process.env.PUBLIC_URL}/img/occtive_dark.png`}
              alt="OCCTIVE Logo"
            />
          </Link>

          {/* ---------- DESKTOP LINKS ---------- */}
          <nav className="header-links" aria-label="Main navigation">
            {pages.map((page, index) => {
              const isActive = page.link === '/' ? pathname === '/' : pathname.startsWith(page.link);
              return (
                <NavLink
                  key={index}
                  to={page.link}
                  exact={page.link === '/'}
                  className="header-link"
                  activeClassName="active"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {page.title}
                </NavLink>
              );
            })}
          </nav>

          {/* ---------- HAMBURGER ---------- */}
          <div className="header-mobile">
            <button
              className="header-mobile-button"
              type="button"
              onClick={() => setMenu(!menu)}
              aria-label="Toggle navigation menu"
              aria-expanded={menu}
              aria-controls="mobile-nav-menu"
            >
              <img
                className="header-mobile-icon"
                src={HeaderMenu}
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* ---------- MOBILE DROPDOWN ---------- */}
        <nav
          id="mobile-nav-menu"
          className={`header-mobile-links${menu ? ' open' : ''}`}
          aria-label="Mobile navigation"
        >
          {pages.map((page, index) => {
            const isActive = page.link === '/' ? pathname === '/' : pathname.startsWith(page.link);
            return (
              <NavLink
                key={index}
                to={page.link}
                exact={page.link === '/'}
                className="header-link"
                activeClassName="active"
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
              >
                {page.title}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Header;
