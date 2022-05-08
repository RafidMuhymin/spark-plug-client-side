import React from "react";
import ContactForm from "../../forms/ContactForm/ContactForm";

export default function Contact() {
  return (
    <main
      style={{
        maxWidth: "768px",
        margin: "0 auto",
      }}
    >
      <h1 className="text-center p-4">Contact Us</h1>

      <ContactForm />
    </main>
  );
}
