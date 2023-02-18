import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log("EventLogger=>",event)
    try {
      const response = await axios.post('http://localhost:5001/myui/users', { username });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateUser;
