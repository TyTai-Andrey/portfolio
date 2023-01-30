import { News } from '@pages/Home/components/News';
import { Partners } from '@pages/Home/components/Partners';
import Popular from '@pages/Home/components/Products/Popular';
import React from 'react';

const Home = () => (
  <>
    <Popular />
    <News />
    <Partners />
  </>
);

export default Home;
