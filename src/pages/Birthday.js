import React from 'react';

import Main from '../layouts/Main';

const Birthday = () => (
  <Main
    title="Birthday"
    description="IT&apos;S RUOSHAN&apos;S BIRTHDAY"
  >
    <article className="post" id="birthday">
      <header>
        <div className="title">
          <h2 data-testid="heading">30 for 30</h2>
          <p>
            HAPPY BIRTHDAY RUOSHAN!!! Below are a few birthday messages from
            your loved ones and friends. We all love you dearly and hope these
            messages of love reflect that!
          </p>
        </div>
      </header>
      <p>RUOSHAN&apos;S BIRTHDAY STUFF HERE</p>
    </article>
  </Main>
);

export default Birthday;
