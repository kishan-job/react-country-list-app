import React from 'react'
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css"
function Footer() {
  return (
     <footer className="container">
        <div className="icons">
          <button>
            <FaGoogle size={20} />
          </button>
          <button>
            <FaFacebookF size={20} />
          </button>
          <button>
            <FaLinkedinIn size={20} />
          </button>
          <button>
            <FaTwitter size={20} />
          </button>
        </div>
        <p>Example.email.com</p>
        <p>Copyright 2025 Name. All rights reserved</p>
      </footer>
  )
}

export default Footer