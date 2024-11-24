import React, {useState, useEffect} from 'react';

const DilemmaScreen = ({ user, setUser }) => {
    const [dilemmas, setDilemmas] = useState([]);

    useEffect(() => {
        const fetchDilemmas = async () => {
            try {
                const response = await fetch('/api/dilemmas/sample');
                const data = await response.json();
                setDilemmas(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchDilemmas();
    }, []);

    // NOT WORKING YET
    const handleResponse = async (dilemmaId, selectedOption) => {
        try {
            const response = await fetch(`/api/users/${user._id}/responses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { 
                        dilemmaId, 
                        response: selectedOption 
                    }
                )
            });

            if (response.ok) {
                console.log('Response added');
            } else {
                console.log('Failed to add response');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome, {user.name}</h1>
            <p>Please respond to the following dilemmas:</p>
            {dilemmas.map((dilemma) => (
                <div key={dilemma._id} style={{ marginBottom: '20px' }}>
                    <h3>{dilemma.issue}</h3>
                    <p>{dilemma.question}</p>
                    {dilemma.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleResponse(dilemma._id, option)}
                            style={{ margin: '5px' }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DilemmaScreen;
