import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [gender, setGender] = useState('');
  const redirect = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        password,
        email,
        year,
        dept,
        gender,
      });

      setName(''),
        setPassword(''),
        setYear(''),
        setEmail(''),
        setDept(''),
        setGender('')
      // Handle successful login
      console.log(response.data);
      redirect('/login')

    } catch (error) {
      // Handle error
      console.error(error);
    }
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
          <label>Year:</label>
          <input
            type="number"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </div>
        <div>
          <label>Dept:</label>
          <input
            type="text"
            value={dept}
            onChange={e => setDept(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select an option</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Passsword:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
