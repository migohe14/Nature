import React from 'react';
import './ContactStyles.css';
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

function ContactPage() {
  return (
    <main className="ContactPage">
      <RegisterForm />
    </main>
  );
}

export default ContactPage;
