import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState } from 'react';

type PartnerProps = {
  item: {
    id: string;
    url: string;
    alt: string;
  };
};

export const Partner: React.FC<PartnerProps> = ({ item }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <div className='partner-icon' id={item.id}>
        <Skeleton variant='rectangular' height={'100%'} width={'100%'} />
      </div>
    );

  return (
    <div key={item.id} className='partner-icon'>
      <img src={item.url} alt={item.alt} />
    </div>
  );
};
