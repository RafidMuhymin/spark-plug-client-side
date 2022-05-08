import React from "react";
import ContactForm from "../../forms/ContactForm/ContactForm";

export default function Contact() {
  return (
    <main
      className="mx-auto p-4"
      style={{
        maxWidth: "768px",
      }}
    >
      <h1 className="text-center">Contact Us</h1>

      <ContactForm />
    </main>
  );
}
