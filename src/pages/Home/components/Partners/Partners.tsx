import React from 'react';
import { Partner } from '@pages/Home/components/Partners/Partner';

import { arrParthers } from '../../../../utils/data';

export const Partners = () => {
  if (!arrParthers?.length) return null;

  return (
    <section className='partners'>
      <div className='swapper'>
        <h1>Наши партнёры</h1>

        <div className='partners-icon mt-50'>
          {arrParthers.map((i) => {
            return <Partner key={i.id} item={i} />;
          })}
        </div>
      </div>
    </section>
  );
};
