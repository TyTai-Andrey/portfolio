import { ShopCart } from '@components/ShopCart';
import Product from '@pages/Home/components/Products/Product';
import { getCartReducer } from '@redux/cart/selectors';
import { map } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const { products } = useSelector(getCartReducer);
  return (
    <>
      <ShopCart />
      {!products?.length ? null : (
        <section className='popular'>
          <div className='swapper'>
            <h1>Товары</h1>
            <div className='popular_products'>
              {!!products?.length &&
                map(products, (i) => <Product key={i.id} product={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
