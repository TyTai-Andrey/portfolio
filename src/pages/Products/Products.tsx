import { ShopCart } from '@components/ShopCart';
import { Skeleton } from '@mui/material';
import Product from '@pages/Home/components/Products/Product';
import { cartActions } from '@redux/cart/actions';
import { getCartProducts } from '@redux/cart/selectors';
import { map } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const { data, loading } = useSelector(getCartProducts);
  const products = data?.result;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(cartActions.fetchProductsAsync());
  }, []);

  if (loading)
    return (
      <section className='popular'>
        <div className='swapper'>
          <h1>Товары</h1>
          <div className='popular_products'>
            {map(new Array(4), () => (
              <div className='product'>
                <Skeleton variant='rectangular' height={'100%'} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  return (
    <>
      <ShopCart />
      {!products?.length ? null : (
        <section className='popular'>
          <div className='swapper'>
            <h1>Товары</h1>
            <div className='popular_products'>
              {map(products, (i) => (
                <Product key={i.id} product={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
