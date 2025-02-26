import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/users");  // Modifica il URL se necessario
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Users List</h1>
          <p className="subtitle">Lista degli utenti registrati</p>
        </header>

        <div className="box">
          <button className="fetch-button" onClick={fetchUsers}>Mostra utenti</button>
          {loading ? <p>Caricamento...</p> : (
            <ul className="user-list">
              {users.length > 0 ? (
                users.map(user => (
                  <li key={user.id} className="user-item">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </li>
                ))
              ) : (
                <p>Clicca su 'Mostra utenti' per visualizzare gli utenti.</p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

