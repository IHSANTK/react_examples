import React, { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(name);
    console.log('Form submitted');
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
