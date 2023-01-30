import { Alert } from '@components/Alert';
import { Skeleton } from '@mui/material';
import Product from '@pages/Home/components/Products/Product';
import { cartActions } from '@redux/cart/actions';
import { getCartProducts } from '@redux/cart/selectors';
import { find } from 'lodash';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

export type ProductPageProps = {};

const ProductPage: FC<
  ProductPageProps & RouteComponentProps<{ id: string }>
> = ({
  match: {
    params: { id },
  },
}) => {
  const { data, loading } = useSelector(getCartProducts);
  const products = data?.result;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(cartActions.fetchProductsAsync());
  }, []);

  const item = find(products, (i) => i.id === Number(id));

  if (loading)
    return (
      <section className='popular'>
        <div className='swapper'>
          <h1>Товар</h1>
          <div className='product'>
            <Skeleton variant='rectangular' height={'100%'} />
          </div>
        </div>
      </section>
    );

  if (!id || !item)
    return <Alert namePage={'Товар'} text={['Данный товар не найден']} />;

  return (
    <>
      {
        <section className='popular'>
          <div className='swapper'>
            <h1>Товар</h1>
            <Product key={item.id} product={item} />
          </div>
        </section>
      }
    </>
  );
};

export default ProductPage;
