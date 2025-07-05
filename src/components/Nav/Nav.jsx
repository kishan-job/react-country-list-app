import React from 'react'
import { IoMdMenu } from "react-icons/io";
import "./Nav.css"
function Nav() {
  return (
    <nav className="container">
        <div className="logo">Counteries</div>
        <ul>
          <li>All</li>
          <li>Asia</li>
          <li>Europe</li>
      </ul>
      <div className='menu'><IoMdMenu  size={20} /></div>
      </nav>
  )
}

export default Nav