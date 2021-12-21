import React from 'react';

import Main from '../layouts/Main';
import Post from '../components/Blog/Post';

const Blog = () => (
  <Main
    title="Blog"
    description="Ruoshan&apos;s blog"
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading">Blog</h2>
          <p>
            A small blog of some of the writing I&apos;ve done over the years.
          </p>
        </div>
      </header>
      <Post />
    </article>
  </Main>
);

export default Blog;
