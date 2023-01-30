import { Alert } from '@components/Alert';
import React, { FC } from 'react';

export type ErrorPageProps = {};

const ErrorPage: FC<ErrorPageProps> = (props) => {
  return <Alert namePage={'Ошибка'} text={['Данной страницы не существует']} />;
};

export default ErrorPage;
