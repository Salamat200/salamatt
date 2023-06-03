import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [matriculationNumber, setMatriculationNumber] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    

    // Send registration data to the backend
    // Example API call:
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from the backend if needed
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>


        <div>
          <label>Matriculation Number:</label>
          <input
            type="text"
            value={matriculationNumber}
            onChange={e => setMatriculationNumber(e.target.value)}
          />

        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </div>

        <div>
          <label>Gender</label>
          <input
  type="radio"
  id="male"
  name="gender"
  value="male"
  checked={gender === 'male'}
  onChange={() => handleGenderChange('male')}
/>
<label for="male">Male</label>
<input
  type="radio"
  id="female"
  name="gender"
  value="female"
  checked={gender === 'female'}
  onChange={() => handleGenderChange('female')}
/>
<label for="female">Female</label>
<input
  type="radio"
  id="other"
  name="gender"
  value="other"
  checked={gender === 'other'}
  onChange={() => handleGenderChange('other')}
/>
<label for="other">Other</label>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
