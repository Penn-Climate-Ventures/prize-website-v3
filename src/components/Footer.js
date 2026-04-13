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
          Our Sponsors and Partners
        </p>
        <div style={styles.sponsorContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/kleinman.png`}
            alt="Kleinman Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/mack_institute.png`}
            alt="Mack Institute Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/viper.png`}
            alt="Viper Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/exelon.png`}
            alt="Exelon Logo"
            style={styles.images}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/KCMJ.png`}
            alt="KCMJ Logo"
            style={styles.images}
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