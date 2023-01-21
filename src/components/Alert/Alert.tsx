import { map } from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';

type AlertProps = {
  namePage: string;
  text?: string[];
};

const defaultText = [
  'Данная страница находится в разработке. ',
  'Пока что тут ничего нет.',
];

export const Alert: React.FC<AlertProps> = ({
  namePage,
  text = defaultText,
}) => {
  return (
    <section className='popular'>
      <div className='swapper'>
        <div className='alert'>
          <h1>{namePage}</h1>

          {map(text, (i) => (
            <p>{i}</p>
          ))}

          <NavLink to='/'>Вернуться на главную</NavLink>
        </div>
      </div>
    </section>
  );
};
