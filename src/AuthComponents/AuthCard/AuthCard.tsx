import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserCount, signIn } from '../../redux/actions/authActions';
import { emailVerification, passwordVerification } from '../../services/emailPasswordVerification';
import './AuthCard.css';

function AuthCard() {
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    adm: false,
  });
  const [infCheck, setInfCheck] = useState(false);

  const handleUserData = ({ target }: any) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const siginUser = () => {
    dispatch(signIn({ ...userData }));
  };

  const register = () => {
    dispatch(createUserCount({ ...userData }));
  };

  const checkEmailAndPAssword = () => {
    if (emailVerification(userData.email) && passwordVerification(userData.password)) {
      setInfCheck(true);
      return;
    }
    setInfCheck(false);
  };

  useEffect(() => {
    checkEmailAndPAssword();
  }, [userData]);

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
      <button
        onClick={() => {
          if (isRegister) return register();
          siginUser();
        }}
        type="button"
      >
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
