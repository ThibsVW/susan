import Mock from "../mock";

const database = {
  information: {
    name: 'Simone',
    aboutContent: "The mission of Honey Photography is to create lasting memories with passion and enthusiasm, in a way that has never been captured and is also determined to handle each and every guest in a family like manner.",
    age: 26,
    phone: '',
    nationality: 'Australian',
    language: 'English',
    email: 'honeyphotography@outlook.com.au',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/patrickjfinnigan/',
      dribbble: '',
      github: 'https://github.com/patrickfinnigan',
      stackoverflow: 'https://stackoverflow.com/users/9613775/patrick-finnigan'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Resume(1.17.2020).pdf'
  },
  services: [
    {
      title: "Animals",
      icon: 'color-pallet',
      details: "explanation here about this topic"
    },
    {
      title: "Celebrations",
      icon: 'code',
      details: "explanation here about this topic."
    },
    {
      title: "Real Estate",
      icon: 'handshake',
      details: "explanation here about this topic"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Wow we are both blown away, these photos are beautiful. Thank you so much for capturing our wedding day. We love our photos and how you’ve captured every precious moment of our ceremony in detail.",
      author: {
        name: 'Mark & Angelica',
        designation: ''
      },
    },
     {
      id: 2,
    content: "Our album has arrived and it is beautiful!! Thank you for all your hard work in helping us create a fabulous keep sake.",
    author: {
    name: 'Susan Yost',
      designation: ''
      }
     },
    {
     id: 3,
      content: "Thank You so much for getting our photo’s out to us so quickly.  They are absolutely beautiful.  You managed to capture so much perfectly. Thank you so much for your professionalism, you made the day that much more relaxed and enjoyable.",
      author: {
       name: 'Alex',
      designation: ''
      }
     }
  ],
  skills: [
    {
      title: "HTML5",
      value: 70
    },
    {
      title: "CSS3",
      value: 65
    },
    {
      title: "Javascript",
      value: 55
    },
    {
      title: "jQuery",
      value: 50
    },
    {
      title: "ReactJS",
      value: 50
    },
    {
      title: "Bootstrap",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Guessing Game",
      subtitle: "HTML, CSS, Javastript",
      imageUrl: "/images/portfolio-image-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/guessinggame/'
    },
    {
      id: 2,
      title: "Gem Mining",
      subtitle: "HTML, CSS, JavaScript, jQuery",
      imageUrl: "/images/portfolio-image-2.jpg",
      // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://pinterest.com'
    },
    {
      id: 3,
      title: "Trivia Game",
      subtitle: "HTML, jQuery, Timers",
      imageUrl: "/images/portfolio-image-3.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/trivia_game/'
    },
    {
      id: 4,
      title: "Gif Generator",
      subtitle: "API, JSON, Ajax",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      url: 'https://patrickfinnigan.github.io/gifgenerator/'
    },
    {
      id: 5,
      title: "Firebase Train Scheduler",
      subtitle: "Firebase, HTML, JavaScript",
      imageUrl: "/images/portfolio-image-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/trainschedule/'
    },
    {
      id: 6,
      title: "Burger Time",
      subtitle: "Mongo, Express, Node",
      imageUrl: "/images/portfolio-image-6.jpg",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://damp-mountain-93742.herokuapp.com/burgers'
    },
    {
      id: 7,
      title: "React Shuffle",
      subtitle: "React",
      imageUrl: "/images/portfolio-image-7.jpg",
      // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://react-gameucbextension2018.herokuapp.com/'
    },
    {
      id: 8,
      title: "NYT Article Scraper",
      subtitle: "React, Mongoose, Cheerio",
      imageUrl: "/images/portfolio-image-8.jpg",
      // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url: 'https://young-river-49658.herokuapp.com/'
    },
    {
      id: 9,
      title: "Demoquest",
      subtitle: "Mongoose, Express, React, Node",
      imageUrl: "/images/portfolio-image-9.jpg",
      // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url: 'https://demoquest.herokuapp.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Frontend Web Developer",
        company: "Socicraft (Currently under NDA)",
        details: "Developing and designing the front-end layout of the company website, utilizing React tools to edit the website to meet company expectations."
      },
      // {
      //   id: 2,
      //   year: "2016 - 2018",
      //   position: "Frontend Web Developer",
      //   company: "CBA Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // },
      // {
      //   id: 3,
      //   year: "2014 - 1016",
      //   position: "UI/UX Designer",
      //   company: "Example Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ],
    educationExperience: [
      {
        id: 1,
        year: "Sept 2012 - July 2016",
        graduation: "Bachelor of Arts in Psychology",
        university: "Sonoma State University",
        details: "Studied clinical and social psychology, and developed an understanding of aesthetic design that can be used in web development"
      },
      {
        id: 2,
        year: "May 2018 - Nov 2018",
        graduation: "Certification in Web Development",
        university: "UC Berkeley Extension Program Coding Bootcamp",
        details: "Learned the fundamentals of computer science and web design, learning how to develop fullstack MERN applications."
      },
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details: "Lorem Ipsum"
      // }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(707) 386-6233'],
    emailAddress: ['patrickfinnigan94@gmail.com'],
    address: "Olympia, Washington"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});