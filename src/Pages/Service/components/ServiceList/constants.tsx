import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { SiMaterialdesign } from 'react-icons/si';
import { FaTeamspeak } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import SkillModal from 'Pages/Service/components/SkillModal';

export const SERVICE_LIST = [
  {
    header: 'Problem-solving',
    img: <HiOutlineLightBulb />,
    modal: <SkillModal
      banner="img/debugging.jpg"
      bannerDescription="the bug sits on the electronic circuitry"
      title="Debugging is an integral part of my work"
      paragraph1="Successful online services and apps rely on exceptional customer
                  experiences. As a front-end developer, my job is to create flawless layouts,
                  so my customers can complete necessary actions
                  (like submit a sign-up form or purchase something).
                  As you probably know, layout issues cause mistrust of your website,
                  so you’ll want to fix them ASAP."
      paragraph2="Sometimes all you have to do to correct errors is to check your code
                  carefully and you will notice that you have accidentally added something unnecessary
                  or forgotten something. But sometimes errors are not obvious and it takes
                  a lot of time to find them. As a frontend developer, I run the application in a browser
                  and monitor the code execution step by step,
                  like an experienced detective looking for the moment when something went wrong."
    />,
  },
  {
    header: 'Creativity',
    img: <SiMaterialdesign />,
    modal: <SkillModal
      banner="img/creativity.jpg"
      bannerDescription="bulb"
      title="Should you be a “regular” Front-End Developer or a creative? (spoiler: both)"
      paragraph1="If customers encounter run-time errors, HTML problems, broken graphics,
                  and other issues, they are not likely to return to the website. So if your code sucks,
                  the UI, UX, interaction designs, transitions, and illustrations are all useless.
                  This means you should be a “regular” developer!"
      paragraph2="What about creativity? First, of course, it depends on the site and its purpose.
                 There are some types of sites where creative front-end development is not a priority. Imagine
                 an online banking site: sure, a couple of nice transitions will make everything softer and nicer,
                 but it's definitely not crucial for business.
                 But if you're presenting your product, company, app, etc.,
                 if you want to stand out with a website, you might need someone more creative to
                 design the Front-End. After all, users will always pay attention to something unusual,
                 and new. And if your site is intuitively easy to use, that's what users will subconsciously
                 want to use. No one likes to read instructions.
                 If to use your site, you need to study a big manual - something went wrong."
    />,
  },
  {
    header: 'Communication',
    img: <FaTeamspeak />,
    modal: <SkillModal
      banner="img/communication.jpg"
      bannerDescription="interacting people"
      title="Why is communication important for developers?"
      paragraph1="Strangely enough, it is a fact that communication
                  is still not a term that is usually associated with the software engineer.
                  In fact, when you talk about coders and programmers, people conjure up images of clumsy geeks,
                  confined in their offices, preferring the company of their computers to other social creatures. In reality,
                  however, communication is ubiquitous and an integral part of software development.
                  Communication is an essential skill on which the success of
                  software development teams and participants depends."
      paragraph2="Communication skills are extremely important to a Software Developer.
                  Few statistics say the majority of Software projects fail because of poor communication.
                  So Software developers must give importance to communication skills such as Listening and Speaking.
                  Listening: Many times business logic is extracted by group discussion
                  from clients/stakeholders/product owners. In those discussions, listing skills play a very important.
                  For example, if you miss one or two sentences, you may miss the entire requirement understanding.
                  When you miss actual requirements, you will develop inaccurate functionality and it will
                  create a high chance of failing the project.
                  Speaking: Sometimes you may need to talk client directly.
                  That time you can realize how important speaking skill is. It is obvious that clearly,
                  to the point speaking with the client is extremely important to understand the client’s business
                  problem that you are going to solve. You have a responsibility to give confidence to clients about you,
                  your team, and your organization who are
                  going to solve their business problems. Without that, the client will not work with you for a long time."
    />,
  },
  {
    header: 'Teamwork',
    img: <RiTeamLine />,
    modal: <SkillModal
      banner="img/teamwork.jpeg"
      bannerDescription="the team put their clenched hands together"
      title="Team player or lone sailor?"
      paragraph1="A team is group of people with different skills and different tasks,
                  who work together on a common project, service, or goal, with a
                  meshing of functions and mutual support."
      paragraph2="So if you need to do something larger than a business card site,
                  the ability to work in a team is one of the basic skills of the developer. Your team
                  is a big mechanism that works on a common complex task.
                  If one part of the mechanism does not work, then it becomes
                  impossible to achieve the set goals."
    />,
  },
];
