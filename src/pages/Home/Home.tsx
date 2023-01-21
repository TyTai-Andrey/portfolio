import { News } from '@pages/Home/components/News';
import { Partners } from '@pages/Home/components/Partners';
import Popular from '@pages/Home/components/Products/Popular';
import { ShopCart } from '@components/ShopCart';
import React from 'react';

const Home = () => (
  <>
    <ShopCart />
    <Popular />
    <News />
    <Partners />
  </>
);

export default Home;
