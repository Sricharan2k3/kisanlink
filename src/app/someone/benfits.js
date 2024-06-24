import React from 'react';

const BenefitsComponent = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>Benfits</header>
      <div style={styles.cardsContainer}>
        {/* Card 1 */}
        <div style={{ ...styles.card, ...styles.card1 }}>
          <div style={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card Image 1" style={styles.image} />
          </div>
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeader1}>Enhanced Efficiency</h2>
            <p style={styles.cardText1}>
            By leveraging Kisanlink's tech platform, FPOs experience streamlined operations and enhanced efficiency in managing farmer databases, membership cards, and financial reporting. This translates to reduced administrative burden and optimized resource utilization.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ ...styles.card, ...styles.card2 }}>
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeader2}>
            Improved Communication</h2>
            <p style={styles.cardText2}>
            Kisanlink facilitates better communication channels between FPOs and their member farmers through its comprehensive database management system. This ensures timely dissemination of information, updates, and announcements.
            </p>
          </div>
          <div style={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card Image 2" style={styles.image} />
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ ...styles.card, ...styles.card1 }}>
          <div style={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card Image 3" style={styles.image} />
          </div>
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeader1}>Access to Technology</h2>
            <p style={styles.cardText1}>
            Through Kisanlink, FPOs gain access to advanced agricultural technologies such as drone-based services for input spraying. This empowers FPOs to offer innovative solutions to their member farmers, enhancing productivity and agricultural outcomes.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div style={{ ...styles.card, ...styles.card2 }}>
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeader2}>
            Data-Driven Decision-Making</h2>
            <p style={styles.cardText2}>
            Kisanlink's financial reporting services provide FPOs with detailed insights into their financial performance, enabling data-driven decision-making. This helps FPOs identify areas for improvement, allocate resources effectively, and strategize for long-term sustainability.
            </p>
          </div>
          <div style={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card Image 4" style={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontWeight:'bold',
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#2E8B57',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack cards vertically
    gap: '20px', // Space between cards
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '',
    width: '100%', // Full width
    padding: '15px',
    borderRadius: '0px',
    boxShadow: '',
    marginBottom:'20px',
    marginTop:'20px'
  },
  cardContent: {
    flex: '1',
    textAlign: 'left',
  },
  cardHeader1: {
    fontSize: '1.2em',
    fontWeight:'Bold',
    marginBottom: '10px',
    color: '#333',
    marginLeft:'200px'
  },
  cardHeader2: {
    fontSize: '1.2em',
    fontWeight:'Bold',
    marginBottom: '10px',
    color: '#333',
    marginRight:'200px'
  },
  cardText1: {
    fontSize: '0.9em',
    color: '#666',
    marginLeft:'200px', // Align text to the left
  },
  cardText2: {
    fontSize: '0.9em',
    color: '#666',
    marginRight:'200px', // Align text to the left
  },
  cardImage: {
    width: '100px', // Fixed width for image container
    height: '100px', // Fixed height for image container
    border: '1px solid #ccc', // Border style for the image container
    borderRadius: '8px', // Rounded corners for image container
    overflow: 'hidden', // Ensure image doesn't overflow its container
  },
  image: {
    width: '100%', // Ensure image fills the container
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Remove any extra space around the image
  },
 
};

export default BenefitsComponent;
