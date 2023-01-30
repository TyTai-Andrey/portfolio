import { Form } from '@components/Form';
import { Modal } from '@components/Modal';
import { ModalComponentProps } from '@components/ModalProvider/ModalProvider';
import withReduxForm from '@utils/withReduxForm';
import React from 'react';
import { getFormValues, reduxForm } from 'redux-form';
import CallForm from './CallForm';
import styles from './CallModal.module.scss';

interface CallModalProps extends ModalComponentProps {}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <Modal onClose={handleClose} isOpen={isOpen} className={styles.root}>
      <div className='modal-body'>
        <h1>Заказать звонок</h1>
        <CallForm />
      </div>
    </Modal>
  );
};
