import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.shanpic} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Embark on a culinary journey where every dish is a masterpiece, crafted with passion, precision, and the freshest ingredients. Welcome to Shan Food Mahal, where gastronomy meets perfection.</p>
        </div>
        <br/>
        <p className="p__opensans"> आपका स्वागत है Shan Food Mahal में, जहां रसोई का जादू और स्वाद का समान्वय मिलता है। यहाँ हर व्यंजन एक कला की तरह है, जिसमें प्रेम और सामग्री की पूरी धार समाहित है। </p>
      </div>

      <div className="app__chef-sign">
        {/* <p>Kevin Luo</p> */}
        <p className="p__opensans"> Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
