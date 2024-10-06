import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificationCard = ({ cert }) => {
  return (
    <div className="certification-item bg-[#1a1a1a] rounded-lg shadow-lg float-in transition-transform duration-300 group hover:scale-105 hover:border-[#89CFF0] hover:border-4">
      <div className="relative">
        <img
          src={cert.cover}
          alt={`${cert.title} Certificate`}
          className="w-full h-auto object-cover rounded-t-lg"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-md sm:text-lg font-medium text-[#89CFF0] mb-2">{cert.title}</h3>
        <p className="text-sm text-white font-regular mb-2">
          ᯓ★ Issued by {cert.issuer} on {cert.date}
        </p>
        <div className="flex justify-center space-x-5 text-sm text-white font-semibold tracking-wide">
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            Verify
          </a>
          <a
            href={cert.certificate}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;