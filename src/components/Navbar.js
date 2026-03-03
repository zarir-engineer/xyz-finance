import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  {
    label: 'Accounts & plans',
    children: [
      { label: 'Individual accounts', to: '/accounts/individual' },
      { label: 'Retirement accounts (IRA)', to: '/accounts/ira' },
      { label: 'Employer-sponsored plans', to: '/accounts/employer' },
      { label: 'Education savings (529)', to: '/accounts/529' },
      { label: 'Cash Plus account', to: '/accounts/cash-plus' },
    ],
  },
  {
    label: 'Investment products',
    children: [
      { label: 'Mutual funds', to: '/products/mutual-funds' },
      { label: 'ETFs', to: '/products/etfs' },
      { label: 'Stocks', to: '/products/stocks' },
      { label: 'Bonds', to: '/products/bonds' },
      { label: 'CDs', to: '/products/cds' },
      { label: 'Money market funds', to: '/products/money-markets' },
    ],
  },
  {
    label: 'Advice & guidance',
    children: [
      { label: 'Compare services', to: '/advice' },
      { label: 'Digital advisor', to: '/advice/digital' },
      { label: 'Personal advisor', to: '/advice/personal' },
      { label: 'Wealth management', to: '/advice/wealth' },
    ],
  },
  {
    label: 'About XYZ',
    children: [
      { label: 'Why choose XYZ', to: '/about' },
      { label: 'Our principles', to: '/about/principles' },
      { label: 'News & research', to: '/about/news' },
      { label: 'Careers', to: '/about/careers' },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuHovered, setMenuHovered] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #ddd8d0',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      boxShadow: '0 2px 16px rgba(10,22,40,0.07)',
    }}>
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
      }} ref={navRef}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38,
            background: '#0a1628',
            borderRadius: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ color: '#e5b55a', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20 }}>X</span>
          </div>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#0a1628',
            letterSpacing: '-0.3px',
          }}>
            XYZ <span style={{ color: '#c8973a' }}>Investments</span>
          </span>
        </Link>

        {/* Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => {
                setTimeout(() => setActiveMenu(prev => prev === item.label ? null : prev), 100);
              }}
            >
              <button style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: activeMenu === item.label ? '#c8973a' : '#0a1628',
                padding: '8px 14px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                transition: 'color 0.2s',
              }}>
                {item.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{
                  transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown */}
              {activeMenu === item.label && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#fff',
                  border: '1px solid #ddd8d0',
                  borderRadius: 8,
                  boxShadow: '0 12px 40px rgba(10,22,40,0.15)',
                  minWidth: 220,
                  padding: '8px 0',
                  animation: 'fadeUp 0.15s ease',
                  zIndex: 300,
                }}
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.children.map(child => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setActiveMenu(null)}
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontSize: 14,
                        color: '#0a1628',
                        fontWeight: 400,
                        transition: 'background 0.15s, color 0.15s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f8f5f0'; e.currentTarget.style.color = '#c8973a'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#0a1628'; }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Resources link */}
          <Link to="/resources" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            color: '#0a1628',
            padding: '8px 14px',
            borderRadius: 4,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#c8973a'}
            onMouseLeave={e => e.currentTarget.style.color = '#0a1628'}
          >
            Resources & education
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Link to="/login" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#0a1628',
            padding: '8px 18px',
            border: '1.5px solid #0a1628',
            borderRadius: 4,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0a1628'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a1628'; }}
          >
            Log in
          </Link>
          <Link to="/open-account" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            padding: '9px 20px',
            background: '#c8973a',
            borderRadius: 4,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#0a1628'}
            onMouseLeave={e => e.currentTarget.style.background = '#c8973a'}
          >
            Open an account
          </Link>
        </div>
      </div>
    </header>
  );
}
