import React from 'react';

const HomeScreen = ({ onStart }) => {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '40px auto',
            padding: '40px',
            textAlign: 'center'
        },
        logoContainer: {
            marginBottom: '30px'
        },
        logo: {
            width: '200px',  // Adjust size as needed
            height: 'auto',  // Maintains aspect ratio
            marginBottom: '10px'
        },
        title: {
            fontSize: '36px',
            color: '#333',
            marginBottom: '20px'
        },
        description: {
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '30px'
        },
        button: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.logoContainer}>
                <img 
                    src="/moral-map-logo.png"  // Path relative to public folder
                    alt="Moral Map Logo"
                    style={styles.logo}
                />
            </div>
            <h1 style={styles.title}>Welcome to Moral Map</h1>
            <p style={styles.description}>
                Moral Map is a crowdsourcing project exploring how people's backgrounds and experiences
                influence their ethical decision-making. You'll be presented with a series of ethical
                dilemmas/debates and asked to make choices based on your personal judgment. Please note that
                your responses are anonymous so answer as honestly as possible. Additionally, your responses will
                not be sent to our database until you complete the entire survey, so make sure to go through all 
                ten dilemmas and press "Complete" when you are done. 
            </p>
            <p style={styles.description}>
                First, we'll ask for some demographic information, and then you'll respond to
                10 different scenarios. Your responses will help us understand how various factors
                affect moral decision-making across different populations. Thank you for your contribution!
            </p>
            <button 
                onClick={onStart}
                style={styles.button}
            >
                Begin Study
            </button>
        </div>
    );
};

export default HomeScreen;