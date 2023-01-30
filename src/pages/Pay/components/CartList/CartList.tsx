import React from 'react';
import { useSelector } from 'react-redux';
import { CartListItem } from './CartListItem';
import { getBasketData } from '@redux/basket/selectors';
import { Alert } from '@components/Alert';

type CartListProps = {};

export const CartList: React.FC<CartListProps> = () => {
  const basketData = useSelector(getBasketData);

  return (
    <section className='cartList'>
      <div className='swapper'>
        {!basketData?.length ? (
          <>
            <Alert
              namePage={'Оплата'}
              text={['Пожалуйста, выберете товар, чтобы начать покупку']}
            />
          </>
        ) : (
          <>
            <h1 className='mt-30'>Выбранные товары</h1>
            <ul className='cartList_items'>
              <CartListItem />
            </ul>
          </>
        )}
      </div>
    </section>
  );
};
