import React from 'react';
import { RouteComponentProps } from 'react-router';
import { News } from '@pages/Home/components/News';

type NewsPageProps = {};

const NewsPage: React.FC<
  NewsPageProps & RouteComponentProps<{ id: string }>
> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <>
      <News />
    </>
  );
};

export default NewsPage;
