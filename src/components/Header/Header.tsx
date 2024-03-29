import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountData } from '@redux/account/selectors';
import { accountActions } from '@redux/account/actions';
import { useModal } from '@utils/useModal';
import { LoginModal } from './LoginModal';

export const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAccountData);

  const token = data?.token;

  const { openModal } = useModal();

  const login = () => {
    openModal(LoginModal);
  };

  const logout = () => {
    dispatch(accountActions.logoutAccount());
  };

  return (
    <header>
      <div className={styles.root}>
        <div className={styles.navbarHeader}>
          <div className={styles.logo}>
            <NavLink to='/'>
              <div className={styles.logoImg}>
                <svg
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.8018 0.0867008C17.9453 0.0121626 21.0333 0.922382 23.6339 2.68995C26.2344 4.45751 28.2172 6.99395 29.305 9.94427C30.3927 12.8946 30.5309 16.1112 29.7002 19.144C29.3326 20.4861 27.9466 21.2761 26.6045 20.9085C25.2623 20.5409 24.4723 19.1548 24.8399 17.8127C25.393 15.7935 25.301 13.6518 24.5768 11.6875C23.8525 9.72315 22.5324 8.03446 20.8011 6.85771C19.0698 5.68095 17.0139 5.075 14.9213 5.12462C12.8286 5.17424 10.8038 5.87695 9.13022 7.13445C7.45662 8.39195 6.21796 10.1413 5.58765 12.1378C4.95734 14.1342 4.96692 16.2778 5.61506 18.2686C6.26319 20.2593 7.51744 21.9976 9.20222 23.24C10.887 24.4825 12.918 25.1671 15.011 25.198C16.4024 25.2186 17.5137 26.3632 17.4932 27.7546C17.4726 29.1461 16.328 30.2574 14.9366 30.2368C11.7926 30.1904 8.74184 29.162 6.21121 27.2958C3.68059 25.4295 1.79675 22.8187 0.823286 19.8287C-0.150178 16.8387 -0.164569 13.6192 0.782124 10.6206C1.72882 7.62203 3.58924 4.99447 6.10308 3.10564L7.61665 5.12004L6.10308 3.10564C8.61692 1.2168 11.6584 0.161239 14.8018 0.0867008Z'
                    fill='#121920'
                  />
                  <path
                    d='M26.4991 24.9706C26.4991 27.0804 24.7887 28.7908 22.6789 28.7908C20.569 28.7908 18.8586 27.0804 18.8586 24.9706C18.8586 22.8608 20.569 21.1504 22.6789 21.1504C24.7887 21.1504 26.4991 22.8608 26.4991 24.9706Z'
                    fill='#F95A59'
                  />
                </svg>
              </div>
              <div className={styles.logoText}>QSOFT </div>
            </NavLink>
          </div>
          <div className={styles.search}>
            <input
              className={styles.ltlGrey}
              type='text'
              placeholder='Найти на сайте...'
            />
          </div>
          <div className={styles.phone}>
            <div className={styles.phoneNumber}>8 (800)-555-35-35</div>
            <div className={classNames(styles.phoneText, styles.ltlGrey)}>
              Звоните с 8 до 23!
            </div>
          </div>
          {token ? (
            <div className='btn btn-blue short' onClick={logout}>
              <div className='btn-content'>
                <span>Выйти</span>
              </div>
            </div>
          ) : (
            <div className='btn btn-blue short' onClick={login}>
              <div className='btn-content'>
                <span>Войти</span>
              </div>
            </div>
          )}
          <div className={styles.mobileMenu}>
            <span></span>
          </div>
        </div>
        <nav className={styles.navbarFooter}>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName={styles.active}>
                Акции
              </NavLink>
            </li>
            <li>
              <NavLink to='/products'>Товары</NavLink>
            </li>
            <li>
              <NavLink to='/pay'>Оплата</NavLink>
            </li>
            <li>
              <NavLink to='/news'>Новости</NavLink>
            </li>
            <li>
              <NavLink to='/about'>О нас</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
