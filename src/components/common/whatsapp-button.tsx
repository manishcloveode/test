import React from "react";
import Image from "next/image";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+919981370788";
  const message = encodeURIComponent(
    "Hi! I want to know more about wabais's services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsappFloat"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsappIcon"
        width={30}
        height={30}
      />
      <span className="whatsappText">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
