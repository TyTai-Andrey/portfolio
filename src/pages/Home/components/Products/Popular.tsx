import React, { useEffect, useMemo } from 'react';
import Product from './Product';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts, getCartProductsOptions } from '@redux/cart/selectors';

import { map, find, slice } from 'lodash';
import { cartActions } from '@redux/cart/actions';
import { Skeleton } from '@mui/material';

const Popular = () => {
  const { data: productsData, loading: productsLoading } =
    useSelector(getCartProducts);
  const { data: productsOptionsData, loading: productsOptionsLoading } =
    useSelector(getCartProductsOptions);

  const products = productsData?.result;
  const productsOptions = productsOptionsData?.result;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(cartActions.fetchProductsAsync());
    if (!productsOptions) dispatch(cartActions.fetchProductOptionssAsync());
  }, []);

  const productsOptionsMap = useMemo(
    () =>
      map(productsOptions, (i) => {
        let product = find(products, (a) => a.id === i.id);
        return (
          product && <Product key={i.id} extraParams={i} product={product} />
        );
      })
        ?.slice(0, 4)
        ?.filter((i) => i),
    [productsOptions, products],
  );

  const productsMap = useMemo(
    () =>
      map(
        slice(products, 0, 4).filter((i) => i),
        (i) => <Product key={i.id} product={i} />,
      ),
    [products],
  );

  const productsMapView = useMemo(
    () => (productsOptionsMap?.length ? productsOptionsMap : productsMap),
    [productsOptionsMap, productsMap],
  );

  if (productsLoading || productsOptionsLoading)
    return (
      <section className='popular'>
        <div className='swapper'>
          <h1>Популярные товары</h1>
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
      {!productsMapView?.length ? null : (
        <section className='popular'>
          <div className='swapper'>
            <h1>Популярные товары</h1>
            <div className='popular_products'>{productsMapView}</div>
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
