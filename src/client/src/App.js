import './App.css';
import UserForm from './components/UserForm';
import DilemmaScreen from './components/DilemmaScreen';
import React, { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      {!user  ? ( <UserForm onUserCreated={(userData) => setUser(userData)} />) 
              : 
                (<DilemmaScreen user={user} />)}
    </div>
  );
}

export default App;
