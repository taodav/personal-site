import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {
  const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

  return (
    <Main
      title="About"
      description="Learn about Ruoshan"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
            <img className="about-pic" src={`${PUBLIC_URL}/images/about/eliza.jpg`} alt="" />
            <p>Me and my cat daughter Eliza</p>
          </div>
        </header>
        <ReactMarkdown
          source={markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default About;
