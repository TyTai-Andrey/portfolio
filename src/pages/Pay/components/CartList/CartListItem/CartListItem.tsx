import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { basketActions } from '@redux/basket/actions';
import { getBasketData } from '@redux/basket/selectors';
import { numberInPrice } from '@utils/func';
import { BasketItemModel } from '@redux/basket/interfaces';
import { Skeleton } from '@mui/material';
import { loadingDelay } from '@utils/data';

type CartListItemProps = {};
export const CartListItem: React.FC<CartListItemProps> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), loadingDelay);
  }, []);

  const dispatch = useDispatch();
  const basketData = useSelector(getBasketData);

  const addProduct = (i: BasketItemModel) => {
    dispatch(
      basketActions.addProduct({
        id: i.id,
      }),
    );
  };

  const reduceProduct = (i: BasketItemModel) => {
    i.count > 0 && dispatch(basketActions.reduceProduct(i.id));
  };

  const removeProduct = (i: BasketItemModel) => {
    dispatch(dispatch(basketActions.removeProduct(i.id)));
  };

  if (loading)
    return (
      <>
        <div className='cartList_item'>
          <Skeleton variant='rectangular' height={'100%'} width={'100%'} />
        </div>
      </>
    );

  return (
    <>
      {basketData.map((i) => {
        return (
          <li key={i.id} className='cartList_item'>
            <div className='cartList_item-body'>
              <div className='cartList_item-photo'>
                <img
                  src={i.productPhoto}
                  width='100%'
                  height='100%'
                  alt={i.title}
                />
              </div>
              <div className='cartList_item-text'>
                <div className='cartList_item-buttons_price'>
                  <h2 className='title'>{i.title}</h2>
                  <div className='cartList_item-buttons_changes_price'>
                    <button onClick={() => reduceProduct(i)}>—</button>
                    <p>{numberInPrice(i.count)}</p>
                    <button onClick={() => addProduct(i)}>+</button>
                  </div>
                </div>
                <div className='cartList_item-button_delete'>
                  <p>{numberInPrice(i.count * i.price)}</p>
                  <button onClick={() => removeProduct(i)}>
                    <i className='fa fa-trash' aria-hidden='true'></i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
