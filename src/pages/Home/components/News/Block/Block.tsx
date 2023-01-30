import { Skeleton } from '@mui/material';
import { loadingDelay } from '@utils/data';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type BlockProps = {
  params:
    | {
        id: string;
        bg_img: null;
        bg_color: string;
        title: string;
        description: string;
      }
    | {
        id: string;
        bg_img: string;
        bg_color: string;
        title: string;
        description: string;
      };
  num: number;
};

export const Block: React.FC<BlockProps> = ({ params, num }) => {
  const typeDeterminant = num % 4;
  let type = 'short';

  if (typeDeterminant === 1 || typeDeterminant === 2) {
    type = 'long';
  }

  const classes = classNames('new_block', {
    [type]: type,
  });
  const bg_color = params.bg_color || 'rgba(12, 18, 124, .8)';
  const bg_img = {
    background: params.bg_img + ' center',
    backgroundSize: 'cover',
  };

  return (
    <div
      key={params.id}
      className={classes}
      style={params?.bg_img ? bg_img : undefined}
    >
      <NavLink to={`/new/${params.id}`}>
        <div className='bg-color' style={{ background: bg_color }}>
          <div className='new_block-text'>
            <h2>{params.title}</h2>
            <p>{params.description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
