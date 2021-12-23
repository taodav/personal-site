import React from 'react';

import Main from '../layouts/Main';

const Birthday = () => {
  const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
  return (
    <Main
      title="Birthday"
      description="IT&apos;S RUOSHAN&apos;S BIRTHDAY"
    >
      <article className="post" id="birthday">
        <div className="birthday-body">
          <div className="title">
            <h2 data-testid="heading">30 for 30</h2>
          </div>
          <img className="birthday-birthday" src={`${PUBLIC_URL}/images/birthday/birthday.jpg`} alt="" />

          <p>HAPPY BIRTHDAY RUOSHAN!!!</p>
          <p>
            Besides your dirty cup leaving habit, I&apos;m truly grateful for having a
            deeply caring, wise and immeasurably thoughtful best friend and sister
            in my life.
          </p>
          <p className="before-pic">
            Holy shit you&apos;re 30!
          </p>
          <img className="birthday-birthday2" src={`${PUBLIC_URL}/images/birthday/birthday2.jpg`} alt="" />
          <p>
            Here&apos;s to hoping you have as much fun today as you did on your second birthday
            (even though this is your fifth)!
          </p>
          <p className="before-pic">
            Even though we haven&apos;t always seen eye to eye
          </p>
          <img className="birthday-fight" src={`${PUBLIC_URL}/images/birthday/fight.jpg`} alt="" />
          <p>
            I still wouldn&apos;t have a big sister any other way. You really are the rock
            to my life, and I&apos;m so glad you don&apos;t charge life coaching fees.
          </p>
          <div className="side-by-side-container">
            <div className="side-by-side-text">
              <p>
                While we won&apos;t be physically together to celebrate your birthday just yet,
              </p>
              <p>
                I promise that we&apos;ll all do something together
                when the world looks just a little more normal!
              </p>
            </div>

            <img className="birthday-princess" src={`${PUBLIC_URL}/images/birthday/princess.jpg`} alt="" />
          </div>
          <p className="before-pic">
            I hope you like this website birthday gift!
            I figured it was about time you finally had a personal website -
            I tried to make it so that it would be at least somewhat professional.

            If you want anything changed for this website, please let me know.
            I&apos;ve essentially gifted you a website and a developer to go along
            with updating that website.
          </p>
          <p>
            You finally have your baby brother working for you for one of your
            apps! Love you loads and have an amazing birthday!!!
          </p>
          <img className="birthday-peace" src={`${PUBLIC_URL}/images/birthday/peace.jpg`} alt="" />
        </div>
      </article>
    </Main>
  );
};

export default Birthday;
