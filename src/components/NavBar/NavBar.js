import { useState } from 'react';
import './NavBar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    const node = document.querySelector('.navbar');
    node.classList.toggle('open');

    setOpen(!open);
  };

  return (
    <div className="navbar">
      <button type="button" className="navbar-toggle" onClick={() => { toogle(); }}>
        {open ? <i className="fa-solid fa-xmark" /> : <i className="fa-solid fa-bars" />}
      </button>
      <a to="/">Home</a>
      <a to="/about">About</a>
    </div>
  );
}

export default Navbar;
