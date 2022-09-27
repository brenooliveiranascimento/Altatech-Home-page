import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUserCount, signIn } from '../../redux/actions/authActions';
import { emailVerification, passwordVerification } from '../../services/emailPasswordVerification';
import './AuthCard.css';

function AuthCard() {
  const userStore = useSelector(({ userData }: any) => userData);
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

  if (userStore.loged) {
    return (
      <section className="auth_card_container">
        <h1>
          Seja bem vindo
          {' '}
          {userStore.user.name}
        </h1>
        <Link to="/">
          Voltar a Home
        </Link>
      </section>
    );
  }

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
      {isRegister && (
      <button
        onClick={() => setUserData({ ...userData, adm: !userData.adm })}
        type="button"
      >
        sou adm
      </button>
      )}
    </section>
  );
}

export default AuthCard;
