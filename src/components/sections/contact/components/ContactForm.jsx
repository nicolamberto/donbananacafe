"use client";

import ContactFormField from "./ContactFormField";
import ContactSubmitButton from "./ContactSubmitButton";

export default function ContactForm({ fields, submit }) {
  return (
    <form className="w-full flex flex-col gap-5">
      {fields.map((field, index) => (
        <ContactFormField key={index} field={field} />
      ))}
      <ContactSubmitButton label={submit.label} />
    </form>
  );
}
