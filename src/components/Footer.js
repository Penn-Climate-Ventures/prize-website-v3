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

        <p style={styles.tierLabel}>Gold</p>
        <div style={styles.sponsorContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/exelon.png`}
            alt="Exelon Logo"
            style={styles.sponsorImage}
          />
        </div>

        <p style={styles.tierLabel}>Silver</p>
        <div style={styles.sponsorContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/kleinman.png`}
            alt="Kleinman Logo"
            style={styles.sponsorImage}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/skyview.png`}
            alt="Skyview Logo"
            style={styles.sponsorImage}
          />
        </div>

        <p style={styles.tierLabel}>Bronze</p>
        <div style={styles.sponsorContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/mack_institute.png`}
            alt="Mack Institute Logo"
            style={styles.sponsorImage}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/KCMJ.png`}
            alt="KCMJ Logo"
            style={styles.sponsorImage}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sponsors/viper.png`}
            alt="Viper Logo"
            style={styles.sponsorImage}
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
  tierLabel: {
    margin: '15px 0 5px 0',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  sponsorImage: {
    width: '280px',
    height: '160px',
    objectFit: 'contain',
  },
  sponsorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    rowGap: '15px',
    flexWrap: 'wrap',
    margin: '10px auto',
    maxWidth: '1100px',
    padding: '0 20px',
  },
  footerText: {
    margin: '20px 0 0 0',
    fontSize: '1rem',
  },
};

export default Footer;
