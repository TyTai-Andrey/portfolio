import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCartReducer } from '@redux/cart/selectors';
import { basketActions } from '@redux/basket/actions';
import { getBasketData } from '@redux/basket/selectors';

type CartListItemProps = {};
export const CartListItem: React.FC<CartListItemProps> = () => {
  const dispatch = useDispatch();
  const basketData = useSelector(getBasketData);

  return (
    <>
      {basketData.map((i: any) => {
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
                    <button
                      onClick={() => {
                        i.count > 0 &&
                          dispatch(basketActions.reduceProduct(i.id));
                      }}
                    >
                      —
                    </button>
                    <p>{i.count}</p>
                    <button
                      onClick={() => {
                        dispatch(
                          basketActions.addProduct({
                            id: i.id,
                          }),
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='cartList_item-button_delete'>
                  <p>{i.count * i.price}</p>
                  <button
                    onClick={() => {
                      dispatch(dispatch(basketActions.removeProduct(i.id)));
                    }}
                  >
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
