import './App.css';
import UserForm from './components/UserForm';
import DilemmaScreen from './components/DilemmaScreen';
import HomeScreen from './components/HomeScreen';
import React, { useState } from 'react';

function App() {
    const [stage, setStage] = useState('home');
    const [user, setUser] = useState(null);

    const handleStart = () => {
        setStage('form');
    };

    const handleUserCreated = (userData) => {
        setUser(userData);
        setStage('survey');
    };

    return (
        <div>
            {stage === 'home' && (
                <HomeScreen onStart={handleStart} />
            )}
            {stage === 'form' && (
                <UserForm onUserCreated={handleUserCreated} />
            )}
            {stage === 'survey' && user && (
                <DilemmaScreen user={user} />
            )}
        </div>
    );
}

export default App;