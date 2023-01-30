import { Alert } from '@components/Alert';
import { Block } from '@pages/Home/components/News/Block';
import classNames from 'classnames';
import { find } from 'lodash';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { arrNews } from '../../utils/data';
import styles from './NewItemPage.module.scss';

export type NewItemPageProps = {};

const NewItemPage: FC<
  NewItemPageProps & RouteComponentProps<{ id: string }>
> = ({
  match: {
    params: { id },
  },
}) => {
  const item = find(arrNews, (item) => item.id === id);

  if (!id || !item)
    return <Alert namePage={'Товар'} text={['Данный товар не найден']} />;

  return (
    <div className={classNames(styles.root, 'swapper', 'whiteBg')}>
      <h1>Новость</h1>
      <Block key={item.id} params={item} num={1} />
    </div>
  );
};

export default NewItemPage;
