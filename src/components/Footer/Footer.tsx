import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  const [modal, setModal] = React.useState({ modal: false });

  function openModal() {
    setModal({ modal: !modal.modal });
    //@ts-ignore
    document.body.style = 'overflow: hidden';
  }

  function closeModal(clickTarget: any) {
    if (
      clickTarget.classList.contains('bg-modal') ||
      clickTarget.classList.contains('close')
    ) {
      setModal({ modal: !modal.modal });
    }
    //@ts-ignore
    document.body.style = '';
  }

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
            <div className='btn btn-blue btn-call' onClick={openModal}>
              <div className='btn-content'>
                <i className='fa fa-phone' aria-hidden='true'></i>
                <span>Заказать звонок</span>
              </div>
            </div>
          </div>
          <div className='call-mobaile' onClick={openModal}>
            <div className='btn-content'>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span>Заказать звонок</span>
            </div>
          </div>
          {modal.modal && (
            <div
              className='bg-modal'
              onClick={(event) => closeModal(event.target)}
            >
              <div className='modal'>
                <div className='modal-header'>
                  <div className='close'>&times;</div>
                </div>
                <div className='modal-body'>
                  <h1>Заказать звонок</h1>
                  <form action='#'>
                    <input type='text' placeholder='Как к вам обращаться?' />
                    <input type='text' placeholder='8(999)999-99-99' />
                    <button>Отправить</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
