import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Shan Food Mahal</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Embark on a culinary journey where every dish is a masterpiece, crafted with passion, precision, and the freshest ingredients. Welcome to Shan Food Mahal, where gastronomy meets perfection.</p>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>आपका स्वागत है Shan Food Mahal में, जहां रसोई का जादू और स्वाद का समान्वय मिलता है। यहाँ हर व्यंजन एक कला की तरह है, जिसमें प्रेम और सामग्री की पूरी धार समाहित है।</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.b1} alt="header_img" />
    </div>
  </div>
);

export default Header;
