import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <img
        src={`${process.env.PUBLIC_URL}/waves.png`}
        alt="Waves"
        style={styles.waveImage}
      />
      <div style={styles.underwater}>
        <p style={styles.footerText}>
          Sponsors and Partners
        </p>
        <div style={styles.sponsorContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/wharton-logo.png`}
            alt="Wharton Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/lanzajet.png`}
            alt="LanzaJet Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/kleinman.png`}
            alt="Kleinman Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/esg.png`}
            alt="ESG Logo"
            style={{ ...styles.images, width: '120px', height: '120px' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/chenel_capital.png`}
            alt="CC Logo"
            style={{ ...styles.images, width: '220px', height: '140px' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/4air.png`}
            alt="4Air Logo"
            style={{ ...styles.images, width: '220px', height: '140px' }}
          />
        </div>
        <p style={styles.footerText}>
          © 2025 PCV PRIZE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    width: '100%',
  },
  waveImage: {
    width: '100%',
    display: 'block',
  },
  underwater: {
    backgroundColor: '#78c5d8',
    padding: '20px',
  },
  images: {
    width: '250px',
    height: '140px',
    objectFit: 'contain',
  },
  sponsorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    rowGap: '15px',
    flexWrap: 'wrap',
    margin: '20px auto',
    maxWidth: '1100px',
    padding: '0 20px',
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;