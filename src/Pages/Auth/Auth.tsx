import React from 'react';
import AuthCard from '../../AuthComponents/AuthCard/AuthCard';
import './Auth.css';

function Auth() {
  return (
    <section className="auth_container">
      <section className="auth_Background">
        <section className="auth_brightness" />
      </section>
      <AuthCard />
    </section>
  );
}

export default Auth;
