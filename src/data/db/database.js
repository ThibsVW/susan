import Mock from "../mock";

const database = {
  information: {
    name: 'Susan',
    aboutContent: "Welcome to my website. I am a Western Australian artist and author/illustrator. I love the beauty of nature and attempt to capture this in my artwork. Artist quality acrylic paint, pencil and watercolour are the mediums I mainly use. Writing and illustration are also passions of mine and I publish books and short stories.I hope I can share my creations with you.",
    age: "",
    phone: '',
    nationality: 'Australian',
    language: 'English',
    email: 'susancarameliart@gmail.com',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: '',
      stackoverflow: '',
      instagram: 'https://www.instagram.com/susancarameliart/'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/PriceList.pdf'
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
      content: "Wow we are both blown away, these photos are beautiful. Thank you so much for capturing our beautiful dog.",
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
      title: "Creativity",
      value: 90
    },
    {
      title: "Patience",
      value: 85
    },
    {
      title: "Attention to detail",
      value: 90
    },
    {
      title: "Technical",
      value: 75
    },
    {
      title: "Communication",
      value: 90
    },
    {
      title: "Flexibility",
      value: 80
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Luna",
      subtitle: "Clink on the picture to meet Luna.",
      imageUrl: "/images/portfolio-image-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170347990260/'
    },
    {
      id: 2,
      title: "Ruckus",
      subtitle: "Clink on the picture to meet Ruckus.",
      
      imageUrl: "/images/portfolio-image-2.jpg",
      // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170467990248'
    },
    {
      id: 3,
      title: "Kobe",
      subtitle: "Clink on the picture to meet Kobe.",

      imageUrl: "/images/portfolio-image-3.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170561323572'
    },
    {
      id: 4,
      title: "Alfie",
      subtitle: "Clink on the picture to meet Alfie.",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170904656871'
    },
    {
      id: 5,
      title: "Lily",
      subtitle: "Clink on the picture to meet Lily.",
      imageUrl: "/images/portfolio-image-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/109914831049145'
    },
    {
      id: 6,
      title: "Ollie",
      subtitle: "Clink on the picture to meet Ollie.",
      imageUrl: "/images/portfolio-image-6.jpg",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/109916944382267'
    },
    {
      id: 7,
      title: "Opus",
      subtitle: "Clink on the picture to meet Opus.",
      imageUrl: "/images/portfolio-image-7.jpg",
      // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/107161754657786'
    },
    {
      id: 8,
      title: "Lilly",
      subtitle: "Clink on the picture to meet Lilly",
      imageUrl: "/images/portfolio-image-8.jpg",
      // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/111912864182675/'
    },
    {
      //id: 9,
      //title: "Demoquest",
      //subtitle: "Mongoose, Express, React, Node",
      //imageUrl: "/images/portfolio-image-9.jpg",
      // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      //url: 'https://demoquest.herokuapp.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Freelance Photographer",
        company: "Honey Photographer",
        details: "That’s right, I am a crazy dog lady, minus the dog. Honey Photography specialises in dogs of all kind, small, medium, large, chonky, intelligent and … the opposite, the groomed, the slobbery, you name it and we specialise in all things Canine. Honey Photography offers 2 different different photoshoot options, we can do a 1 hour shoot in nature (beach, park, bush) or we can do an at home studio back drop shoot in your dog’s special comfort zone. You get to view these photos instantly on the day unedited and you can select your favourites. I then edit these photos myself by hand (without presets). I will then personalise an intimate keepsake box with a few special items for you and your furry friend to adore. This will then be delivered directly to your home. I hope to see you all soon and you will have to see what I have planned for the future. Hopefully seeing you at markets, dog beaches and parks soon :). Thank you so much for your support, it is very much appreciated !"
      },
       {
         id: 2,
         year: "2015 - Present",
         position: "Registered Nurse",
         company: "Fiona Stanley Hospital",
         details: "My main inspiration to become a nurse comes from an inborn desire to care for people in times of their need. I feel that helping patients overcome the burden of different health conditions, as well as, supporting their families through such difficult times is satisfactory."
       },
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
        year: "2020",
        graduation: "Photography Course",
        university: "TAFE",
        details: "Ever since the world’s first photograph was taken more than 200 years ago, people have turned to cameras to capture some of life's most important moments; however, few have mastered the art of doing so effectively"
      },
      {
        id: 2,
        year: "2015",
        graduation: "Bachelor of Nursing",
        university: "Murdoch",
        details: "The primary role of a nurse is to advocate and care for individuals of all ethnic origins and religious backgrounds and support them through health and illness. "
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
 /*  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "",
      createTime: "03 December 2019"
    }
  ], */
  contactInfo: {
    emailAddress: ['susancarameliart@gmail.com'],
    address: "Perth, Australia",
       /*phoneNumbers: ['+61400007073'],*/
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