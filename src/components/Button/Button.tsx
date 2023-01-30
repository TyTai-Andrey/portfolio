import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={classNames(styles.root, className)}>{children}</button>
  );
};
