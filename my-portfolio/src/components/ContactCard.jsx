import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="flex items-center mx-2 my-4 hover:bg-gradient-to-r from-[#ff68f0] to-[#89CFF0] p-2 rounded-lg transition-all duration-300">
      <div className="px-2">
        <img
          src={contact.logo}
          alt={contact.title}
          className="w-[50px] h-[50px] mb-2"
        />
      </div>
      <div className="px-4">
        <h3 className="text-md font-regular">{contact.title}</h3>
        <a
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold tracking-wide pt-2 text-white hover:text-[#000]"
        >
          {contact.username}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;