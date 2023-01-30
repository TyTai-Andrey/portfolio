import { CircleTooltip } from '@components/CircleTooltip';
import { Modal } from '@components/Modal';
import { Portal } from '@mui/base';
import { formatPhone } from '@utils/func';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useModal } from '@utils/useModal';
import { CallModal } from './CallModal';

export const Footer = () => {
  const { openModal } = useModal();

  const openModalHandler = () => {
    openModal(CallModal);
  };

  return (
    <footer className='footer'>
      <div className='swapper'>
        <div className='footer-nav'>
          <ul className='footer-nav_ul'>
            <li className='footer-logo'>
              <NavLink to='/' exact>
                qsoft
              </NavLink>
            </li>
            <li className='line'></li>
            <li className='footer-soc'>
              <div>
                <i className='fa fa-play-circle' aria-hidden='true'></i>
              </div>
              <div>
                <i className='fa fa-camera' aria-hidden='true'></i>
              </div>
            </li>
            <li className='line'></li>
            <li className='footer-link'>
              <ol>
                <li>
                  <NavLink to='/' exact>
                    Правила
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/' exact>
                    Документы
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/' exact>
                    Политика конфиденциальности
                  </NavLink>
                </li>
              </ol>
            </li>
          </ul>

          <div className='footer-call'>
            <div className='btn btn-blue btn-call' onClick={openModalHandler}>
              <div className='btn-content'>
                <i className='fa fa-phone' aria-hidden='true'></i>
                <span>Заказать звонок</span>
              </div>
            </div>
          </div>
          <CircleTooltip classes={'call-mobaile'} onClick={openModalHandler}>
            <div className='btn-content'>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span>Заказать звонок</span>
            </div>
          </CircleTooltip>
        </div>
      </div>
    </footer>
  );
};
