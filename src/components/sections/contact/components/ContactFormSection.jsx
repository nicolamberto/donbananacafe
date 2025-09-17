"use client";

import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";

export default function ContactFormSection({ title, fields, submit }) {
  return (
    <div className="md:col-span-6 flex flex-col justify-center border-[6px] border-[#2B1C0E] bg-[#FBF1C6] rounded-[28px] p-5 md:p-10 shadow-[6px_6px_0px_0px_#2B1C0E]">
      <ContactTitle title={title} />
      <ContactForm fields={fields} submit={submit} />
    </div>
  );
}
