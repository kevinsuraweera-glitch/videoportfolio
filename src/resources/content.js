import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Kevin',
  lastName: 'The Editor',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Video Editor and Animator',
  avatar: '/images/avatar.jpg',
  email: 'kevinsuraweera@gmail.com',
  location: 'Sri Lanka/Kandy', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about video editing, motion design, technology, and
      share thoughts on the intersection of video creation and web development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'YouTube',
    icon: 'youtube',
    link: 'https://www.youtube.com/@Kevin.TheEditor/',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/chamodranaweera/',
  },
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/daniellidman",
  // },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Where Vision Meets Precision in Post Production</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Kevin The Editor Reel</strong>
      </>
    ),
    href: '/',
  },
  subline: (
    <>
      I'm Kevin, a video editor and animator fusing creativity and emerging
      technology to craft unforgettable visual experiences.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'About',
    description: (
      <>
        I’m a skilled video editor based in Sri Lanka, with over three years of experience on Fiverr delivering engaging, high-quality video content across various formats, including talking head videos, short form video content, and motion animated edits. Alongside video editing, I bring four years of graphic design experience, having created impactful banners, social media posts, and leaflets for Sri Lanka's leading brands like Browns PLC, enhancing their presence with cohesive visuals that complement my video work. 

        <br></br>
        <br></br>
        Always Be creative!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Fiverr',
        timeframe: '2023 - Present',
        role: 'Freelance Video Editor',
        achievements: [
          <>
            I produce over 10 high-quality videos monthly, catering to international YouTube audiences including clients from the USA and Germany.

          </>,
          <>
            My content is tailored to meet diverse market needs, ensuring engaging and polished videos that resonate globally.
          </>,
          <>
            I hold a Level One Seller status on Fiverr with a 5.0 star rating, reflecting consistent client satisfaction and professional excellence.

          </>,
          <>
            My workflow emphasizes clear communication, early previews, and minimal revisions, ensuring smooth collaboration and consistently high-quality results for every client.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: 'AgStar PLC',
        timeframe: '2022 - 2024',
        role: 'Content Creator',
        achievements: [
          <>
            Led video production for AgStar PLC’s digital campaigns, creating promotional ads and short-form social media content that boosted brand visibility across platforms like Facebook, Instagram, and TikTok.


          </>,
          <>
            Managed end-to-end creative execution, from scripting and editing to final delivery, producing high-impact videos aligned with AgStar’s agricultural branding and seasonal promotions.


          </>,
          <>
            Designed graphic assets including product labels, banners, and social media posts, ensuring visual consistency and audience engagement across print and digital channels.


          </>,
          <>
            Collaborated closely with marketing and product teams to align messaging, drive campaign performance, and maintain a cohesive brand identity across all visual content.
          </>,
        ],
        images: [],
      },
      {
        company: 'FOA Media Unit',
        timeframe: '2021 - 2025',
        role: 'Volunteer Video Editor & Live Broadcast Specialist',
        achievements: [
          <>
            As a Volunteer Video Editor & Live Broadcast Specialist, I edited event highlights, promotional clips, and recap videos to enhance audience engagement and storytelling impact. I managed live streaming setups, ensuring smooth technical execution across platforms like YouTube and Facebook during real time broadcasts. Collaborated with media teams to coordinate content delivery, troubleshoot onsite challenges, and maintain high production standards under tight timelines.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Faculty of Agriculture, University of Ruhuna',
        description: (
          <>BSc. Agricultural Resource Management & Technology (ARMT)
</>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes.
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
