import React from 'react';

import Main from '../layouts/Main';

const Birthday = () => (
  <Main
    title="Birthday"
    description="IT&apos;S RUOSHAN&apos;S BIRTHDAY"
  >
    <article className="post" id="birthday">
      <div className="birthday-body">
        <div className="title">
          <h2 data-testid="heading">30 for 30</h2>
        </div>
        <p>HAPPY BIRTHDAY RUOSHAN!!!</p>
        <p>
          Besides your dirty cup leaving habit, I&apos;m truly grateful for having a
          deeply caring, wise and immeasurably thoughtful best friend and sister
          in my life.
        </p>
        <p>
          I hope you like this website birthday gift!
          I figured it was about time you finally had a personal website -
          I tried to make it so that it would be at least somewhat professional.

          If you want anything changed for this website, please let me know.
          I&apos;ve essentially gifted you a website and a developer to go along
          with updating that website.
        </p>
        <p>
          You finally have your baby brother working for you for one of your
          apps!
        </p>
      </div>
    </article>
  </Main>
);

export default Birthday;
