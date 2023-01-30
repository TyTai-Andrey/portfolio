import { Form } from '@components/Form';
import Input from '@components/Input';
import { getAccountData } from '@redux/account/selectors';
import { asyncValidator } from '@utils/asyncValidator';
import { formatPhone } from '@utils/func';
import { useModal } from '@utils/useModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  change,
  getFormValues,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';
import { useSnackbar } from 'notistack';
import { callShapes } from './shapes';

interface CallFormProps {}
type ShapeType = typeof callShapes.form.shape;

export const CallForm: React.FC<
  CallFormProps & InjectedFormProps<ShapeType>
> = ({ handleSubmit }) => {
  const { closeModal } = useModal();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const dispath = useDispatch();
  const values = useSelector(getFormValues('CallModal')) as ShapeType;
  const accountData = useSelector(getAccountData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (accountData?.login)
      dispath(change('CallModal', 'name', accountData?.login));
  }, [accountData?.login]);

  const onChangePhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(/[^\d]/g, '');

    if (value.length <= 11) dispath(change('CallModal', 'phone', value));
  };

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // .replaceAll(/[^a-zA-Zа-яА-Я ]/g, '')

    if (value.length <= 21) dispath(change('CallModal', 'name', value));
  };

  useEffect(() => {
    setErrors({});
  }, [values]);

  const submit = async () => {
    const validate = asyncValidator(callShapes.form.schema);

    try {
      await validate(values);

      enqueueSnackbar('Данные отправлены', {
        variant: 'success',
        onClick: () => closeSnackbar(),
      });
      closeModal();
    } catch (errors) {
      setErrors(errors as { [key: string]: string });
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        name='name'
        placeholder='Как к вам обращаться?'
        value={values?.name}
        onChange={onChangeNameHandler}
        error={errors.name}
      />
      <Input
        value={formatPhone(values?.phone)}
        name='phone'
        type='text'
        placeholder='+7 (999) 999-99-99'
        onChange={onChangePhoneHandler}
        error={errors.phone}
      />
      <button>Отправить</button>
    </Form>
  );
};

export default reduxForm({
  form: 'CallModal',
  initialValues: callShapes.form.shape,
})(CallForm);
