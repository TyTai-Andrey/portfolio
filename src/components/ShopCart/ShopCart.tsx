import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ShopCart.module.scss';
import { getBasketData } from '@redux/basket/selectors';
import { CircleTooltip } from '@components/CircleTooltip';

export const ShopCart = () => {
  const basketData = useSelector(getBasketData);
  const { pathname } = useLocation();

  return (
    <>
      {!basketData?.length || pathname === '/pay' ? null : (
        <CircleTooltip classes={styles.root}>
          <NavLink to='pay'>
            <div className={styles.btnContent}>
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
            </div>
            <span className={styles.buyCounter}>{basketData?.length}</span>
          </NavLink>
        </CircleTooltip>
      )}
    </>
  );
};
