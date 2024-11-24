import React, {useState} from 'react';

const UserForm = ({ onUserCreated }) => {
    // User form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        city: '',
        state: '',
        country: '',
        education: '',
        employmentStatus: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type ="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
            <input type="text" name="education" placeholder="Education" onChange={handleChange} required />
            <input type="text" name="employmentStatus" placeholder="Employment Status" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;