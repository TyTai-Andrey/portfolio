import { Alert } from '@components/Alert';
import { ShopCart } from '@components/ShopCart';
import Product from '@pages/Home/components/Products/Product';
import { getCartReducer } from '@redux/cart/selectors';
import { find, map } from 'lodash';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styles from './ProductPage.module.scss';

export type ProductPageProps = {};

const ProductPage: FC<
  ProductPageProps & RouteComponentProps<{ id: string }>
> = (props) => {
  console.log(props);
  const {
    match: {
      params: { id },
    },
  } = props;

  const { products } = useSelector(getCartReducer);

  const item = find(products, (i) => i.id === Number(id));

  if (!id || !item)
    return <Alert namePage={'Товар'} text={['Данный товар не найден']} />;

  return (
    <>
      <ShopCart />
      {!products?.length ? null : (
        <section className='popular'>
          <div className='swapper'>
            <h1>Товар</h1>
            <Product key={item.id} product={item} />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;
