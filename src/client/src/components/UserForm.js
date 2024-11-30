import React, {useEffect, useState} from 'react';

const UserForm = ({ onUserCreated }) => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [locationType, setLocationType] = useState('');
    const [education, setEducation] = useState('');
    const [employmentStatus, setEmployment] = useState('');
    const [religion, setReligion] = useState('');

    const formStyles = {
        container: {
            maxWidth: '500px',
            margin: '40px auto',
            padding: '30px'
        },
        title: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px',
            fontSize: '24px'
        },
        formGroup: {
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column'
        },
        label: {
            marginBottom: '8px',
            color: '#555',
            fontSize: '14px'
        },
        input: {
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
        },
        select: {
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            backgroundColor: 'white'
        },
        button: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px'
        }
    };

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

    const religions = [
        'Christianity',
        'Islam',
        'Hinduism',
        'Buddhism',
        'Judaism',
        'Atheism',
        'Other'
    ];

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
        "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador",
        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan",
        "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
        "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
        "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
        "Zambia", "Zimbabwe"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = { age, gender, country, state, locationType, education, employmentStatus, religion };
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
        <div style={formStyles.container}>
            <h1 style={formStyles.title}>Demographic Information</h1>
            <form onSubmit={handleSubmit}>
                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Age</label>
                    <input 
                        type="number"
                        style={formStyles.input}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Gender</label>
                    <select 
                        style={formStyles.select}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)} 
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-Binary</option>
                        <option value="genderqueer">Genderfluid</option>
                        <option value="prefer-not-to-say">Prefer Not to Say</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Country</label>
                    <select 
                        style={formStyles.select}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)} 
                    >
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                {country === 'United States' && (
                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>State</label>
                        <select 
                            style={formStyles.select}
                            value={state}
                            onChange={(e) => setState(e.target.value)} 
                            required
                        >
                            <option value="">Select State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Location Type</label>
                    <select 
                        style={formStyles.select}
                        value={locationType}
                        onChange={(e) => setLocationType(e.target.value)} 
                        required
                    >
                        <option value="">Select Location Type</option>
                        <option value="rural">Rural</option>
                        <option value="suburban">Suburban</option>
                        <option value="urban">Urban</option>
                    </select>
                </div>

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Education Level</label>
                    <select 
                        style={formStyles.select}
                        value={education}
                        onChange={(e) => setEducation(e.target.value)} 
                        required
                    >
                        <option value="">Select Education Level</option>
                        <option value="none">None</option>
                        <option value="highschool">High School</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate School</option>
                        <option value="doctorate">Doctorate</option>
                    </select>
                </div>

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Employment Status</label>
                    <select 
                        style={formStyles.select}
                        value={employmentStatus}
                        onChange={(e) => setEmployment(e.target.value)} 
                        required
                    >
                        <option value="">Select Employment Status</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="employed">Employed</option>
                        <option value="part-time">Part-Time</option>
                        <option value="student">Student</option>
                        <option value="self-employed">Self-Employed</option>
                    </select>
                </div>

                <div style={formStyles.formGroup}>
                    <label style={formStyles.label}>Religion</label>
                    <select 
                        style={formStyles.select}
                        value={religion}
                        onChange={(e) => setReligion(e.target.value)} 
                        required
                    >
                        <option value="">Select Religion</option>
                        {religions.map((religion, index) => (
                            <option key={index} value={religion}>{religion}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" style={formStyles.button}>
                    Continue to Survey
                </button>
            </form>
        </div>
    );
};

export default UserForm;
