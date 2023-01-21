import { Alert } from '@components/Alert';
import { ShopCart } from '@components/ShopCart';
import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <ShopCart />
      <Alert namePage={'About'} />
    </React.Fragment>
  );
};

export default About;
