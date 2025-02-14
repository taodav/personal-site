import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/ruoshan.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ruoshan Tao (陶若珊)</h2>
        <p><a href="mailto:ruoshan.tao@gmail.com">ruoshan.tao@gmail.com</a></p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;

/*
    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ruoshan Tao. </p>
      <p>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ?
          <Link to="/resume" className="button">Learn More</Link> :
          <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
 */
