import React, { useState } from 'react';
import './AuthCard.css';

function AuthCard() {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    adm: false,
  });

  const handleUserData = ({ target }: any) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <section className="auth_card_container">
      <h1>Logar</h1>
      { isRegister && (
      <input
        onChange={handleUserData}
        value={userData.name}
        name="name"
      />
      )}
      <input
        onChange={handleUserData}
        value={userData.email}
        name="email"
      />
      <input
        onChange={handleUserData}
        value={userData.password}
        name="password"
      />
      <button type="button">
        { isRegister ? 'Registrar' : 'entrar' }
      </button>
      <button
        onClick={() => setIsRegister(!isRegister)}
        type="button"
      >
        { isRegister ? 'Já possuo conta' : 'Registrar' }
      </button>
    </section>
  );
}

export default AuthCard;
