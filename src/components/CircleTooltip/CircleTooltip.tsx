import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './CircleTooltip.module.scss';

export type CircleTooltipProps = {
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
};

export const CircleTooltip: FC<CircleTooltipProps> = ({
  children,
  classes,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={classNames(styles.root, classes)}>
      {children}
    </div>
  );
};
