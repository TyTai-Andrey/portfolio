import React from 'react';
import Product from './Product';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartReducer } from '@redux/cart/selectors';

import { map, find, slice } from 'lodash';

const Popular = () => {
  const { products, productsOptions } = useSelector(getCartReducer);

  return (
    <>
      {!products?.length ? null : (
        <section className='popular'>
          <div className='swapper'>
            <h1>Популярные товары</h1>
            <div className='popular_products'>
              {!!productsOptions?.length
                ? map(productsOptions, (i) => {
                    let product = find(products, (a) => a.id === i.id);
                    return (
                      product && (
                        <Product key={i.id} extraParams={i} product={product} />
                      )
                    );
                  })
                : map(slice(products, 0, 4), (i) => (
                    <Product key={i.id} product={i} />
                  ))}
            </div>
            <div className='btn btn-white mt-30'>
              <NavLink to='/products'>
                <div className='btn-content'>
                  <span>Смотреть каталог</span>
                  <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Popular;
