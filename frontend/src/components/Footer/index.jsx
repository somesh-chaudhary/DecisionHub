import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)', 
      padding: '30px 40px',
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-secondary)',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h3 className="text-gradient" style={{ fontFamily: 'Outfit', fontSize: '1.2rem', margin: 0 }}>DECISION_HUB</h3>
        </Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>© 2026 Neural Networks. Copyright Reserved.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '600' }}>Social:</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a 
            href="https://github.com/somesh-chaudhary" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub Profile"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem', 
              textDecoration: 'none', 
              padding: '8px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.25s ease' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'var(--neon-cyan)';
              e.currentTarget.style.background = 'rgba(0, 245, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 245, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/somesh-chaudhary/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn Profile"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem', 
              textDecoration: 'none', 
              padding: '8px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.25s ease' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38bdf8';
              e.currentTarget.style.borderColor = '#0a66c2';
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 102, 194, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaLinkedin size={18} color="#0a66c2" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
