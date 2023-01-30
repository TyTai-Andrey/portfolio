import withReduxForm from '@utils/withReduxForm';
import React, { FC } from 'react';
import styles from './Input.module.scss';

export type InputProps = {};

const Input = (props: any) => {
  return (
    <>
      <input className={styles.root} {...props} />
      {props.error && <div className={styles.error}>{props.error}</div>}
    </>
  );
};

Input.Redux = withReduxForm(Input);

export default Input;
