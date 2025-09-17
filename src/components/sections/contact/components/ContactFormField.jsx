"use client";

function renderField(field) {
  const baseClasses =
    "w-full rounded-[28px] border-[3px] border-[#2B1C0E] bg-[#F4DFC6]/80 px-4 py-3 shadow-[3px_3px_0px_0px_#2B1C0E] focus:outline-none";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.name}
        placeholder={field.placeholder}
        className={`${baseClasses} resize-none`}
        rows={4}
      />
    );
  }

  return (
    <input
      id={field.name}
      type={field.type}
      placeholder={field.placeholder}
      className={baseClasses}
    />
  );
}

export default function ContactFormField({ field }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={field.name} className="font-heading text-lg">
        {field.label}
      </label>
      {renderField(field)}
    </div>
  );
}
