import React from 'react';
import { Alert } from '@components/Alert';
import { ShopCart } from '@components/ShopCart';

const Saveguard = () => {
  return (
    <>
      <ShopCart />
      <Alert namePage={'Saveguard'} />
    </>
  );
};

export default Saveguard;
