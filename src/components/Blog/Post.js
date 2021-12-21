// import React, {useState} from 'react';
import React from 'react';

// Currently we just hard code in this blog post as an example.
// TODO: Make this a proper component

const Post = () => {
  const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
  // const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="blog-post-container">
      <h1>Wuhan&apos;s Cherry Blossoms</h1>
      <p className="post-subtitle">
        March 24th, 2020.
        Posted&nbsp;
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/photo/?fbid=10158068062053879&set=a.109877978878">
          here
        </a>
        &nbsp;originally.
      </p>
      <p>
        I went home to Anhui for Chinese New Year in late January.
        Wuhan Covid case numbers were in the high dozens when I departed for my trip,
        and outside of Hubei, the situation looked somewhat under control.
        I brought with me a stash of N95s I had on hand due to a volcano eruption
        just outside of Manila. At the very least, something to give to the family.
      </p>
      <p>
        In my mind, my mother would be well-equipped: she works for a world class hospital
        in Beijing. She double hats as a family medicine doctor and as Chief Medical Officer.
        17 years ago, she was an ICU doctor on the frontlines battling SARS in Beijing,
        then the epicenter of the crisis. Given this experience, her hospital secured medical
        supplies early. They bought respirators, masks, and most importantly ventilators that
        they then donated to Wuhan front liners. These seasoned medical administrators and
        doctors had seen SARS before, and they knew that securing these critical supplies
        would mean the difference between life and death - both for patients and the doctors
        who take care of them.
      </p>
      <p>
        Even though my mother was on a &quot;holiday&quot;, she worked the entire time we
        were in Anhui.
        I did my part by helping to proof read English translated notices for their patients
        and their internal staff communications. The Chinese CDC visited frequently
        and offered new, up to date advice on how to protect medical staff, serve patients,
        and minimise disruption. A complete breath of fresh air compared to the disaster
        that was the government handling of SARS.
      </p>
      <p>
        In her own hospital, buildings were clearly demarcated into green zones and red zones
        - respirators were reserved for the doctors seeing fever patients. For the rest
        (family medicine doctors like my mother), they were told to wear surgical masks or
        KF94 standard masks. They had selflessly donated equipment to the doctors in Wuhan
        and didn&apos;t leave enough for themselves. Professional solidarity, they said.
        As my family left Anhui to return to Beijing, I felt assured that at the very least,
        my mom could wear the N95 masks I brought her.
      </p>
      <p>
        But alas, it was not meant to be. The masks were stolen out of my dad&apos;s luggage.
        I was heartbroken. I felt that I had failed to protect my mother and it was hard
        not to blame myself - I should&apos;ve told them to keep it in their carry on. I waited
        until she hung up the phone so she wouldn&apos;t see me cry. Her first patient back at
        work was a lady from Hubei who came in with a cough. I have never been so scared
        in my life.
      </p>
      <p>
        And today, as Covid escalates globally, there are many more doctors, nurses,
        and health workers who are also forced to work without the necessary equipment they
        need to keep themselves safe. As humanity, we have failed them. They are risking their
        lives to keep us safe - and we couldn&apos;t even do the bare minimum of setting our
        politics
        and bullshit aside to figure out how best to support them.
      </p>
      <p>
        The Trump China virus narrative has been notably damaging - China is the world&apos;s
        biggest
        producer of PPE. Is now the time to point fingers and aggravate their leaders? How China
        dealt with Covid is in many ways, a model for the rest of the world - they have
        successfully kept most of the country in &quot;containment&quot; stage, case numbers have
        dropped drastically over the past few weeks, and life is going back to normal, albeit with
        additional restrictions (traffic in Beijing is back!). China sacrificed Wuhan not
        only to keep the rest of China safe, they did it and bought the rest of the world time
        - experts estimate that the lockdown reduced overseas transmission by 80%.
      </p>
      <p>
        This by no means, absolves the CCP of responsibility from their failures and missteps
        - the bureaucracy was slow to respond to the crisis in the early stages, and the
        suppression of the public response to Li Wenliang&apos;s death was terrible, unnecessary,
        and ignited something in ordinary citizens that they will pay for in the years to
        come. It is clear that the CCP needs to change. It is a behemoth, sprawling
        organisation of over 100 million party members - and within it a complex set of power
        dynamics that can at times, make it unwieldy and slow to respond to threats.
      </p>
      <p>
        But in the mean time, we should be humble, get down on the damn ground, and
        learn from the policies that worked and saved millions of lives. China mobilised
        the entire country, companies, workers to come together and work 24/7 to produce
        critical medical supplies. They built two hospitals in a matter of days. Tech
        companies chipped in, providing free medical consultations for those with mild
        symptoms or non-Covid related illnesses. Local communities got together and provided
        services like food delivery to the elderly and vulnerable. They went to feed and take
        care of the pets of owners who were stuck outside of Wuhan. The sense of unity in
        the country was inspiring - it felt to me that every single person in China felt
        that they had to play a part. The combination of these efforts led to the ultimate
        containment of the virus - or at least the first wave of it.
      </p>
      <p>
        On Weibo, a lot of people lamented the initial slow reaction of their own provinces,
        asking provincial leaders to “抄作业“ from more successful provinces, which means to
        copy homework. It is time that Western leaders do the same.
      </p>
      <p>
        Spring has come early to Wuhan this year. The cherry blossoms are blooming.
        People are still mostly stuck indoors, but hopefully not for too much longer.
      </p>
      <img
        className="post-picture"
        src={`${PUBLIC_URL}/images/blog/wuhan_blossoms.jpg`}
        alt=""
      />
    </div>
  );
};

export default Post;
