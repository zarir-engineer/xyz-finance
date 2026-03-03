import React from 'react';
import { Link } from 'react-router-dom';

const topLinks = [
  { label: 'Personal investors', to: '/personal' },
  { label: 'Financial professionals', to: '/professionals' },
  { label: 'Institutional investors', to: '/institutional' },
];

export default function TopBar() {
  return (
    <div style={{
      background: '#0a1628',
      padding: '7px 32px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '24px',
    }}>
      {topLinks.map(l => (
        <Link key={l.to} to={l.to} style={{
          color: '#9aaec4',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.2px',
          transition: 'color 0.2s',
          textDecoration: 'none',
        }}
          onMouseEnter={e => e.target.style.color = '#e5b55a'}
          onMouseLeave={e => e.target.style.color = '#9aaec4'}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
