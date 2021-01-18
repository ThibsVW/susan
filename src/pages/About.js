import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
    axios.get('/api/services')
      .then(response =>{
        setServices(response.data)
      })
    axios.get('/api/reviews')
      .then(response =>{
        setReviews(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  {/*{information.aboutContent} */}

                  Hello, my name is Simone, and I will be your Photographer! This is a little blurb to get to know me :)
                  <br></br>
                  <br></br>
                  I have been a Nurse for the past 5 years caring and helping all kinds of people, I love nursing but needed a little something more wholesome. I always joked that if I quit my career I would become a dog photographer because who wouldn’t want to spend every day with dogs?
                  <br></br>
                  <br></br>
                  In 2020 I took a leap and decided I am going to follow my heart and become a dog photographer &AMP; I am travelling down a new creative path with purpose to make people happy, myself included; and cuddle as many dogs as possible!
                  <br></br>
                  <br></br>
                  And what better way to make people happy than to create memories of their adored furry friend.
                  <br></br>
                  <br></br>
                  I am a part of the Photography Institute however I have always been nifty with a camera and a lot of my skills have been self-taught.
                  <br></br>
                  <br></br>
                  I love hard copy photos that you can touch, hold and keep forever, and I am always that person that brings out the old photo albums, creating photobooks as birthday presents, making holiday videos and yep, I am that person always with a camera in hand.
                  <br></br>
                  <br></br>
                  You can be sure I am either taking photos, looking at photos or creating something incredible with those memories.
                  <br></br>
                  <br></br>
                  I do not just take photos, I create keepsakes of cherished memories.
                  <br></br>
                  <br></br>
                  I grew up in the Perth Hills, Western Australia, with a large family and forever a rescued family dog.
                  <br></br>
                  <br></br>
                  I have a partner Jason, many friends and a beloved god daughter who makes a very good assistant but a not so great model as she is currently a 3 year old human hurricane.  
                  <br></br>
                  <br></br>
                  I am currently renting and not allowed a dog of my own, however the day I can I know she will be a Golden Cocker Spaniel named Honey.
                </p>
                <ul>
                  {/* {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>} */}
                  {!information.age ? null : <li>
                    <b>Age</b> {information.age} Years
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                  {!information.freelanceStatus ? null : <li>
                    <b>Freelance</b> {information.freelanceStatus}
                  </li>}
                </ul>
               
               {/*
                <a href={information.cvfile} className="mi-button">Price List</a>

               */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                  <Service content={service}/>
                </div>
              ))}
            </div>
          </div>
        </div>
              </div>*/}
<div className="container">
  <br></br>
  <br></br>
</div>
<div className="container">
          <Sectiontitle title="About Honey Photography" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
               {/*} <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
            */}
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
           
                <p>
               
                That’s right, I am a crazy dog lady, minus the dog.
                <br></br>
                <br></br>
                Honey Photography specialises in dogs of all kind, small, medium, large, chonky, intelligent and … the opposite, the groomed, the slobbery, you name it and we specialise in all things Canine.
                <br></br>
                <br></br>
                Honey Photography offers 2 different different photoshoot options, we can do a 1 hour shoot in nature (beach, park, bush) or we can do an at home studio back drop shoot in your dog’s special comfort zone.
                <br></br>
                <br></br>
                 You get to view these photos instantly on the day unedited and you can select your favourites.
                <br></br>
                <br></br>
                I then edit these photos myself by hand (without presets)
                <br></br>
                <br></br>
                I will then personalise an intimate keepsake box with a few special items for you and your furry friend to adore.
                <br></br>
                <br></br>
                This will then be delivered directly to your home.
                <br></br>
                <br></br>
                I hope to see you all soon and you will have to see what I have planned for the future
                <br></br>
                <br></br>
                Hopefully seeing you at markets, dog beaches and parks soon :)
                <br></br>
                <br></br>
                Thank you so much for your support,it is very much appreciated !
                <br></br>
                <br></br>
                Simone 
                </p>
              </div>
            </div>
          </div>
        </div>


{/*


      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review =>(
                  <Testimonial key={review.id} content={review}/>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
                */}

    </Layout>
  );
}

export default About;
