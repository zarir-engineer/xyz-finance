import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// All the dog SVG parts drawn inline so no external dependency needed
function DogSVG({ mood }) {
  const [wag, setWag] = useState(0);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const wagTimer = setInterval(() => {
      setWag(w => (w + 1) % 3);
    }, 400);
    const blinkTimer = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000);
    return () => { clearInterval(wagTimer); clearInterval(blinkTimer); };
  }, []);

  const tailAngles = [-20, 0, 20];
  const tailAngle = tailAngles[wag];

  return (
    <svg width="220" height="240" viewBox="0 0 220 240" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))' }}>

      {/* Shadow */}
      <ellipse cx="110" cy="228" rx="60" ry="10" fill="#0a162818" />

      {/* TAIL — animated */}
      <g style={{
        transformOrigin: '74px 170px',
        transform: `rotate(${tailAngle}deg)`,
        transition: 'transform 0.3s ease-in-out',
      }}>
        <ellipse cx="52" cy="160" rx="14" ry="26" fill="#c8973a" transform="rotate(-30 52 160)" />
        <ellipse cx="44" cy="145" rx="10" ry="18" fill="#e5b55a" transform="rotate(-20 44 145)" />
      </g>

      {/* BODY */}
      <ellipse cx="115" cy="175" rx="58" ry="50" fill="#c8973a" />
      <ellipse cx="115" cy="170" rx="52" ry="44" fill="#d4a045" />

      {/* BELLY patch */}
      <ellipse cx="115" cy="185" rx="30" ry="28" fill="#f5d48a" />

      {/* FRONT LEGS */}
      <rect x="82" y="205" width="20" height="34" rx="10" fill="#c8973a" />
      <rect x="118" y="205" width="20" height="34" rx="10" fill="#c8973a" />
      {/* Paws */}
      <ellipse cx="92" cy="239" rx="12" ry="8" fill="#b8872a" />
      <ellipse cx="128" cy="239" rx="12" ry="8" fill="#b8872a" />

      {/* NECK */}
      <ellipse cx="115" cy="138" rx="30" ry="22" fill="#c8973a" />

      {/* HEAD */}
      <circle cx="115" cy="108" r="44" fill="#d4a045" />
      <circle cx="115" cy="108" r="40" fill="#e0ab50" />

      {/* EARS */}
      <ellipse cx="78" cy="88" rx="18" ry="28" fill="#c8973a" transform="rotate(-15 78 88)" />
      <ellipse cx="152" cy="88" rx="18" ry="28" fill="#c8973a" transform="rotate(15 152 88)" />
      <ellipse cx="79" cy="90" rx="11" ry="20" fill="#b8872a" transform="rotate(-15 79 90)" />
      <ellipse cx="151" cy="90" rx="11" ry="20" fill="#b8872a" transform="rotate(15 151 90)" />

      {/* FACE - snout */}
      <ellipse cx="115" cy="122" rx="22" ry="16" fill="#f5d48a" />

      {/* NOSE */}
      <ellipse cx="115" cy="115" rx="10" ry="7" fill="#3d2000" />
      <ellipse cx="112" cy="113" rx="3" ry="2" fill="#6b4000" opacity="0.6" />

      {/* MOUTH */}
      {mood === 'happy' ? (
        <>
          <path d="M105 124 Q115 133 125 124" stroke="#3d2000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* tongue */}
          <ellipse cx="115" cy="131" rx="8" ry="6" fill="#e07070" />
          <line x1="115" y1="127" x2="115" y2="137" stroke="#c05050" strokeWidth="1.5" />
        </>
      ) : (
        <path d="M106 126 Q115 130 124 126" stroke="#3d2000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}

      {/* EYES */}
      <circle cx="99" cy="100" r="9" fill="#fff" />
      <circle cx="131" cy="100" r="9" fill="#fff" />
      {blink ? (
        <>
          <rect x="90" y="98" width="18" height="5" rx="2.5" fill="#3d2000" />
          <rect x="122" y="98" width="18" height="5" rx="2.5" fill="#3d2000" />
        </>
      ) : (
        <>
          <circle cx="100" cy="101" r="6" fill="#3d2000" />
          <circle cx="132" cy="101" r="6" fill="#3d2000" />
          <circle cx="102" cy="99" r="2" fill="#fff" />
          <circle cx="134" cy="99" r="2" fill="#fff" />
        </>
      )}

      {/* EYEBROWS — sad */}
      {mood === 'waiting' && (
        <>
          <path d="M91 92 Q99 88 107 92" stroke="#8b6000" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M123 92 Q131 88 139 92" stroke="#8b6000" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* COLLAR */}
      <rect x="88" y="133" width="55" height="12" rx="6" fill="#0a1628" />
      <rect x="109" y="133" width="13" height="12" rx="3" fill="#c8973a" />
      <circle cx="115" cy="146" r="5" fill="#e5b55a" />

      {/* spots */}
      <circle cx="95" cy="108" r="4" fill="#c8973a" opacity="0.4" />
      <circle cx="135" cy="106" r="3" fill="#c8973a" opacity="0.3" />
    </svg>
  );
}

/* Speech bubble */
function SpeechBubble({ text }) {
  return (
    <div style={{
      position: 'relative',
      background: '#fff',
      border: '2px solid #ddd8d0',
      borderRadius: 16,
      padding: '14px 20px',
      maxWidth: 280,
      margin: '0 auto 8px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    }}>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 14,
        color: '#0a1628',
        lineHeight: 1.5,
        textAlign: 'center',
      }}>{text}</p>
      {/* Arrow pointing down toward dog */}
      <div style={{
        position: 'absolute',
        bottom: -14,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '14px solid #ddd8d0',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '12px solid #fff',
      }} />
    </div>
  );
}

const dogMessages = [
  "Woof! This page is still being built! 🐾",
  "My humans are working on it! Come back soon! 🦴",
  "Nothing to see here... yet! I'm guarding the spot! 🐕",
  "This feature is napping right now. Just like me! 😴",
  "Good things take time — and treats! 🍖",
];

export default function ComingSoon() {
  const location = useLocation();
  const [msgIndex, setMsgIndex] = useState(0);
  const [bounce, setBounce] = useState(false);

  // Pick a message based on path so it's consistent per page
  useEffect(() => {
    const idx = Math.abs(location.pathname.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % dogMessages.length;
    setMsgIndex(idx);
  }, [location.pathname]);

  // Wiggle dog when clicked
  const handleDogClick = () => {
    setBounce(true);
    setMsgIndex(i => (i + 1) % dogMessages.length);
    setTimeout(() => setBounce(false), 600);
  };

  // Format page name from URL
  const pageName = location.pathname
    .split('/')
    .filter(Boolean)
    .map(s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
    .join(' › ') || 'This page';

  return (
    <div style={{
      minHeight: '70vh',
      background: 'linear-gradient(160deg, #f8f5f0 0%, #fff 60%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 32px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>

        {/* Breadcrumb hint */}
        <div style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: '#c8973a',
          marginBottom: 24,
        }}>
          {pageName}
        </div>

        {/* Speech bubble */}
        <SpeechBubble text={dogMessages[msgIndex]} />

        {/* Dog — click to change message */}
        <div
          onClick={handleDogClick}
          style={{
            cursor: 'pointer',
            display: 'inline-block',
            animation: bounce ? 'bounce 0.5s ease' : 'none',
            marginTop: 16,
            userSelect: 'none',
          }}
          title="Click me!"
        >
          <DogSVG mood="happy" />
        </div>

        <p style={{
          fontSize: 11,
          color: '#9aaec4',
          marginTop: 6,
          marginBottom: 28,
        }}>
          (click the pup for a new message 🐾)
        </p>

        {/* Main message */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.2rem',
          color: '#0a1628',
          marginBottom: 14,
          lineHeight: 1.2,
        }}>
          Coming Soon
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 36,
          maxWidth: 380,
          margin: '0 auto 36px',
        }}>
          We're busy building this section. Our team is working hard to bring you something great.
          Check back soon!
        </p>

        {/* Divider */}
        <div style={{
          width: 60, height: 3,
          background: 'linear-gradient(90deg, #c8973a, #e5b55a)',
          borderRadius: 2,
          margin: '0 auto 32px',
        }} />

        {/* Actions */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" style={{
            background: '#0a1628',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: 4,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#c8973a'}
            onMouseLeave={e => e.currentTarget.style.background = '#0a1628'}
          >
            ← Back to home
          </Link>
          <Link to="/open-account" style={{
            background: 'transparent',
            color: '#0a1628',
            padding: '11px 26px',
            borderRadius: 4,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: 14,
            border: '1.5px solid #0a1628',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0a1628'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a1628'; }}
          >
            Open an account
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-18px) rotate(-5deg); }
          60% { transform: translateY(-8px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}
