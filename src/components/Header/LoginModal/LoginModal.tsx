import { Modal } from '@components/Modal';
import { ModalComponentProps } from '@components/ModalProvider/ModalProvider';
import React, { FC } from 'react';
import LoginForm from './LoginForm';
import styles from './LoginModal.module.scss';

export type LoginModalProps = {};

export const LoginModal: FC<LoginModalProps & ModalComponentProps> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <Modal className={styles.root} isOpen={isOpen} onClose={handleClose}>
      <h1>Войти</h1>
      <LoginForm />
    </Modal>
  );
};
