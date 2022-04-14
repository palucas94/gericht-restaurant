import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    id="about" className="app__aboutus app__bg flex__center section__padding"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique.
          In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app_aboutus-content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique.
          In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
