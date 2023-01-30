import { Modal } from '@components/Modal';
import { ModalComponentProps } from '@components/ModalProvider/ModalProvider';
import React, { FC } from 'react';
import styles from './InfoModal.module.scss';

export type InfoModalProps = {
  title: string;
  data: { [key: string]: string };
} & ModalComponentProps;

export const InfoModal: FC<InfoModalProps> = ({
  isOpen,
  handleClose,
  title,
  data,
}) => {
  const renderData = () => {
    let result = [];

    for (const key in data) {
      result.push(<span>{`${key}: ${data[key]}`}</span>);
    }

    return result;
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.data}>{renderData()}</div>
    </Modal>
  );
};
