import React, { useState, useEffect } from 'react';

function Profile () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend
    // Update the "user" state with the fetched data
    // Example API call:
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          {/* Add other profile details */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
