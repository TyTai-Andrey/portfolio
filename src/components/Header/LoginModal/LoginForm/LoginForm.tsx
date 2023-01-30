import { Button } from '@components/Button';
import { Form } from '@components/Form';
import Input from '@components/Input';
import { accountActions } from '@redux/account/actions';
import { accountShapes } from '@redux/account/shapes';
import { asyncValidator } from '@utils/asyncValidator';
import { useModal } from '@utils/useModal';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './LoginForm.module.scss';
import { useSnackbar } from 'notistack';

export type LoginFormProps = {};
type ShapeType = typeof accountShapes.form.shape;

const LoginForm: FC<LoginFormProps & InjectedFormProps<ShapeType>> = ({
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const values = useSelector(getFormValues('LoginForm')) as ShapeType;

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setErrors({});
  }, [values]);

  const submit = async () => {
    const validate = asyncValidator(accountShapes.form.schema);

    try {
      await validate(values);
    } catch (errors) {
      setErrors(errors as { [key: string]: string });
    }

    dispatch(accountActions.fetchAccountAsync(values));
    enqueueSnackbar('Данные отправлены', {
      variant: 'success',
      onClick: () => closeSnackbar(),
    });
    closeModal();
  };

  return (
    <Form className={styles.root} onSubmit={handleSubmit(submit)}>
      <Input.Redux
        type='text'
        name='login'
        placeholder='Логин'
        error={errors.login}
      />
      <Input.Redux
        type='text'
        name='password'
        placeholder='Пароль'
        error={errors.password}
      />

      <Button className={styles.button}>Отправить</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'LoginForm',
  initialValues: accountShapes.form.shape,
})(LoginForm);
