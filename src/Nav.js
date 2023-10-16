import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const[show, handleShow]= useState(false);
  useEffect(()=>{
window.addEventListener("scroll",()=>{
  if (window.scrollY>100){
    handleShow(true);
  }else handleShow(false)
});
// return ()=>{
//   window.removeEventListener("scroll");
// }
  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className="nav_logo"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt=""
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png"
        alt=""
      />
    </div>
  )
}

export default Nav
