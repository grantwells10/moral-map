import React, {useState, useEffect} from 'react';

// Hard-coded attention check dilemma
const attentionCheck = {
    _id: "654321654321654321654321",
    issue: "Food Safety",
    question: "Food safety is very important. To ensure you are actually paying attention, choose Abolish the FDA.",
    options: ["FDA is important", "Abolish the FDA", "Unsure"],
    isAttentionCheck: true
};

const DilemmaScreen = ({ user }) => {
    const [dilemmas, setDilemmas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const fetchDilemmas = async () => {
            try {
                const response = await fetch('/api/dilemmas/sample');
                const data = await response.json();
                // Randomly choose index for attention check between 2 and 8
                const randomIndex = Math.floor(Math.random() * 7) + 2;
                const withAttentionCheck = [
                    ...data.slice(0, randomIndex),
                    attentionCheck,
                    ...data.slice(randomIndex)
                ];
                // Ensure we only have 10 dilemmas total
                setDilemmas(withAttentionCheck.slice(0, 10));
            } catch (err) {
                console.error(err);
            }
        };
        fetchDilemmas();
    }, []);

    // Update local state, don't make API call until the end
    const handleResponse = (dilemmaId, selectedOption) => {
        setResponses(prev => ({
            ...prev,
            [dilemmaId]: selectedOption
        }));
    }

    // Only used at the end to bulk submit
    const submitResponses = async () => {

        const passedAttentionCheck = responses[attentionCheck._id] === "Abolish the FDA";

        try {
            const response = await fetch(`/api/users/${user._id}/responses/bulk`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ responses, passedAttentionCheck })
            });

            if (response.ok) {
                setIsComplete(true);
            } else {
                console.log('Failed to submit responses')
            }
        } catch (err) {
            console.error(err);
        }
    }

    // Previous button, allow user to go back
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    // Next button, allow user to go to next dilemma while dilemmas left
    const handleNext = async () => {
        if (currentIndex < dilemmas.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            await submitResponses();
        }
    }

    // Load when fetching dilemmas
    if (dilemmas.length === 0) {
        return <p>Loading...</p>
    }

    // Complete screen
    if (isComplete) {
        return (
            <div>
                <h2>Thank You!</h2>
                <p>Thank you for completing all the ethical dilemmas. Your responses have been recorded.</p>
            </div>
        );
    }

    const currentDilemma = dilemmas[currentIndex];
    const hasResponse = responses[currentDilemma._id];
    const isLast = dilemmas.length - 1 === currentIndex;

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
            <div>
                <h2>Dilemma {currentIndex + 1} of {dilemmas.length}</h2>
                <h3 style={{ marginTop: '20px' }}>{currentDilemma.issue}</h3>
                <p style={{ marginTop: '10px', marginBottom: '20px' }}>
                    {currentDilemma.question}
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentDilemma.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleResponse(currentDilemma._id, option)}
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: responses[currentDilemma._id] === option ? '#e0e0e0' : 'white',
                                cursor: 'pointer',
                                textAlign: 'left'
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginTop: '20px',
                    alignItems: 'center' 
                }}>
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        style={{
                            padding: '8px 16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                            opacity: currentIndex === 0 ? 0.5 : 1
                        }}
                    >
                        Previous
                    </button>

                    <span>{currentIndex + 1} / {dilemmas.length}</span>

                    <button
                        onClick={handleNext}
                        disabled={!hasResponse}
                        style={{
                            padding: '8px 16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: !hasResponse ? 'not-allowed' : 'pointer',
                            opacity: !hasResponse ? 0.5 : 1,
                            backgroundColor: hasResponse ? '#007bff' : '#ccc',
                            color: hasResponse ? 'white' : 'black'
                        }}
                    >
                        {isLast ? 'Complete' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DilemmaScreen;
