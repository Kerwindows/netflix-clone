import React, {useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [scrolled, setScrolled] = useState(false); 
  useEffect(() => {
    console.log(window.scrollY);
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
        
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll); // Add the scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener when the component unmounts
    };
  }, []);
  return (
    <div className={`nav ${scrolled ? 'nav_scrolled' : ''}`}>
        <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
    </div>    
  )
}

export default Nav