import React, { useState } from 'react';
import './AuthCard.css';

function AuthCard() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="auth_card_container">
      <h1>Logar</h1>
      { isRegister && <input name="name" />}
      <input name="email" />
      <input name="password" />
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
