import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function Complaints() {
  const [complaints, setComplaints] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [taken_drugs, setTakenDrugs] = useState(''); // Initializing the state variable
  const [duration, setDuration] = useState('')


  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/complaints/${id}`);
        setComplaints(response.data);
      } catch (error) {
        console.error(error);
        // Handle the error as needed
      }
    };


    fetchComplaints();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/complaints', {
        symptoms,
        duration,
        taken_drugs,
      });
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }

  };

  return (
    <div>
      <h2>Complaints</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Symptoms:</label>
          <input
            type="text"
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </div>

        <div>
          <label>Duration:</label>
          <input
            type="number"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />

        </div>
        <div>
          <label>Taken any drugs?:</label>
          <select value={taken_drugs} onChange={(e) => setTakenDrugs(e.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Submit Complaint</button>
      </form>


      <div>
        <h2>Complaints</h2>
        {complaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <ul>
            {complaints.map((complaint) => (
              <li key={complaint.id}>
                <p>Symptoms: {complaint.symptoms}</p>
                <p>Duration: {complaint.duration}</p>
                <p>Drugs Taken: {complaint.taken_drugs}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Complaints;