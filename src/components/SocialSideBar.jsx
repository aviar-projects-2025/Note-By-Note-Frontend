import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialSidebar() {
  return (
    <>
      <style>
        {`
          .social-sidebar {
            position: fixed;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
          }

          .social-btn {
            width: 25px;
            height: 25px;
            background: #ec4899;
            color: white;
            border-radius: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-btn:hover {
            transform: scale(1.15);
          }

          @media (max-width: 768px) {
            .social-sidebar {
              right: 10px;
            }

            .social-btn {
              width: 27px;
              height: 27px;
            }
          }
        `}
      </style>

      <div className="social-sidebar">
        <a
          href="https://instagram.com/notebynoteaz"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </>
  );
}