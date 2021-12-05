import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ruoshan Tao's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">A whole webpage about Meat Mountain</Link></h2>
          <p>
            Made by my (not a real engineer) <a href="http://taodav.cc" target="_blank" rel="noreferrer">baby brother</a>.
          </p>
        </div>
      </header>
      <p> Welcome to my website!
      </p>
      <p>
        I&apos;m a tech marketer with a well rounded background in
        eCommerce, digital publishing & B2B SaaS. Experienced in digital and performance
        marketing, campaigns, social media, PR, brand management, and partnerships.
        I&apos;m both the Head of <a href="https://shopee.ph/m/shopee-pay">ShopeePay Philippines</a> and
        the Head of Marketing for <a href="https://shopee.ph/">Shopee Philippines</a>.
      </p>
    </article>
  </Main>
);

export default Index;
