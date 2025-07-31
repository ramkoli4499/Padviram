import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    // Placeholder – real API fetch setup can be added here
    // setResumes([{ name: 'Ram', email: 'ram@example.com' }]);
  }, []);

  return (
    <div>
      <h1>Padviram Admin Panel</h1>
      <h2>Submitted Resumes</h2>
      <ul>
        {resumes.map((r, i) => (
          <li key={i}>{r.name} – {r.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
