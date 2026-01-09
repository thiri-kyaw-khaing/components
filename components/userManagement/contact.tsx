import React from "react";

function ContactInfo({ email, phone }: { email?: string; phone?: string }) {
  return (
    <div>
      <h1 className="text-gray-600">{email}</h1>
      <h1 className="text-gray-600">{phone}</h1>
    </div>
  );
}

export default ContactInfo;
