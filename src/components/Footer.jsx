import React from 'react'
import { FaFacebook } from "react-icons/fa";import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const footer = () => {
  return (
    <footer className="bg-primary text-light py-4" style={{borderRadius:"10px"}}>
    <div className="container text-center" style={{color:"#fff "}}>
      <p className="mb-1">&copy; 2024 Freeze. All rights reserved.</p>
      <div className="social-links">
      <h3>Follow us on social media</h3>
        <a href="https://www.facebook.com/profile.php?id=61562127687763" className="text-light mx-2">
        <FaFacebook size={20}/>
        </a>
        <a href="https://www.tiktok.com/@freeze.egy" className="text-light mx-2">
        <FaTiktok size={20}/>
        </a>
        <a href="https://www.instagram.com/freeze.egy/" className="text-light mx-2">
         <RiInstagramFill size={20}/>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default footer
