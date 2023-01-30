import React from 'react';
import { Block } from '@pages/Home/components/News/Block';
import { NavLink, useLocation } from 'react-router-dom';
import { arrNews } from '../../../../utils/data';
import classNames from 'classnames';

export const News = () => {
  const { pathname } = useLocation();

  if (!arrNews?.length) return null;

  return (
    <section
      className={classNames('new', {
        whiteBg: pathname !== '/',
      })}
    >
      <div className='swapper'>
        <h1>Новости компании</h1>
        <div className='new_blocks'>
          {arrNews.map((item, index) => {
            return <Block key={item.id} params={item} num={index} />;
          })}
        </div>
        {pathname !== '/news' && (
          <div className='btn btn-white'>
            <NavLink to='/news'>
              <div className='btn-content'>
                <span>Смотреть все новости</span>
                <i className='fa fa-arrow-right' aria-hidden='true'></i>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};
