import React from 'react';
import '../Orcamento.css';

export default function OrçamentForm() {
  return (
    <section className="message_area">
      <input placeholder="Nome" />
      <input placeholder="Telefone" />
      <input placeholder="Email" />
      <input placeholder="CNPJ" />
      <textarea placeholder="Menssagem" />
      <button type="button">
        Enviar
      </button>
    </section>
  );
}
