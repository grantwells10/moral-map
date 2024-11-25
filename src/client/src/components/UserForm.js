import React, {useEffect, useState} from 'react';

const UserForm = ({ onUserCreated }) => {
    // User form data
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [locationType, setLocationType] = useState('');
    const [education, setEducation] = useState('');
    const [employmentStatus, setEmployment] = useState('');
    const [countries, setCountries] = useState([]);

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
        "Wisconsin", "Wyoming"
    ];

    // Fetch countries from API
    useEffect(() => {
        const fetchCountries = async() => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const names = data.map((country) => country.name.common).sort();
            setCountries(names);
        }
        fetchCountries();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = { age, gender, country, state, locationType, education, employmentStatus };
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            });
            const user = await response.json();
            console.log('User created:', user);
            onUserCreated(user);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <h1>User Information</h1>
            <input 
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <select name="gender" onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-Binary</option>
                <option value="genderqueer">Genderfluid</option>
                <option value="prefer-not-to-say">Prefer Not to Say</option>
                <option value="other">Other</option>
            </select>
            <select name="country" onChange={(e) => setCountry(e.target.value)} required>
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
            {country === 'United States' && (
                <select name="state" onChange={(e) => setState(e.target.value)} required>
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            )}
             <select name="locationType" onChange={(e) => setLocationType(e.target.value)} required>
                <option value="">Select Location Type</option>
                <option value="rural">Rural</option>
                <option value="suburban">Suburban</option>
                <option value="urban">Urban</option>
            </select>
            <select name="education" onChange={(e) => setEducation(e.target.value)} required>
                <option value="">Select Education Level</option>
                <option value="none">None</option>
                <option value="highschool">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate School</option>
                <option value="doctorate">Doctorate</option>
            </select>
            <select name="employment" onChange={(e) => setEmployment(e.target.value)} required>
                <option value="">Select Employment Status</option>
                <option value="unemployed">Unemployed</option>
                <option value="employed">Employed</option>
                <option value="part-time">Part-Time</option>
                <option value="student">Student</option>
                <option value="self-employed">Self-Employed</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;