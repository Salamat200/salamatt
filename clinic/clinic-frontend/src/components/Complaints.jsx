import React from "react";
import { useState } from "react";

function Complaints(){
    const [symptoms, setSymptoms] = useState('');
    const [hasTakenDrugs, setHasTakenDrugs] = useState(''); // Initializing the state variable


    const handleSubmit = e => {
        e.preventDefault();
    
        // Send the complaint data to the backend
        // Example API call:
        fetch('/api/complaints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ complaint }),
        })
          .then(response => response.json())
          .then(data => {
            // Handle response from the backend if needed
            console.log(data);
          })
          .catch(error => console.log(error));
    
        // Clear the complaint input field
        setComplaint('');
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
            <div><label>Taken any drugs?:</label>
<div>
  <input
    type="radio"
    id="yes"
    name="drugs"
    value="yes"
    checked={hasTakenDrugs === 'yes'}
    onChange={() => setHasTakenDrugs('yes')}
  />
  <label for="yes">Yes</label>
</div>
<div>
  <input
    type="radio"
    id="no"
    name="drugs"
    value="no"
    checked={hasTakenDrugs === 'no'}
    onChange={() => setHasTakenDrugs('no')}
  />
  <label for="no">No</label>
</div>
</div>
            <button type="submit">Submit Complaint</button>
          </form>
        </div>
      );
    };
    
    export default Complaints;