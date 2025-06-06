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
  <p style={styles.footerText}>Sponsors and Partners</p>
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
            style={{ ...styles.images, width: '100px', height: '100px' }}  // Override dimensions for square logo
          />
          <img
            src={`${process.env.PUBLIC_URL}/chenel_capital.png`}
            alt="CC Logo"
            style={{ ...styles.images, width: '270px', height: '270px' }}  // Override dimensions for square logo
          />
          <img
            src={`${process.env.PUBLIC_URL}/4air.png`}
            alt="4Air Logo"
            style={{ ...styles.images, width: '270px', height: '270px' }}  // Override dimensions for square logo
          />
        </div>
  <p style={styles.footerText}>© 2025 PCV PRIZE. All rights reserved.</p>
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
    width: '300px',
    height: '200px',
    objectFit: 'contain',
  },

  sponsorContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: '20px auto', // Center the container
    maxWidth: '1000px', // Limit container width
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;