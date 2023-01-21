import React from 'react';
import { Block } from '@pages/Home/components/News/Block';
import { NavLink } from 'react-router-dom';
import { arrNews } from '../../../../mocData/data';

export const News = () => {
  return (
    <section className='new'>
      <div className='swapper'>
        <h1>Новости компании</h1>
        <div className='new_blocks'>
          {arrNews.map((item, index) => {
            return <Block key={item.id} params={item} num={index} />;
          })}
        </div>
        <div className='btn btn-white'>
          <NavLink to='/about'>
            <div className='btn-content'>
              <span>Смотреть все новости</span>
              <i className='fa fa-arrow-right' aria-hidden='true'></i>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
