import * as Yup from 'yup';

export const accountShapes = {
  form: {
    //initial data for the form
    shape: {
      login: '',
      password: '',
    },

    //scheme for checking the form for errors
    schema: Yup.object().shape({
      login: Yup.string()
        .min(4, 'Логин должен содержать хотя бы 4 символа')
        .required('Незаполненое поле')
        .typeError('Незаполненое поле'),
      password: Yup.string()
        .min(4, 'Пароль должен содержать хотя бы 4 символа')
        .required('Незаполненое поле')
        .typeError('Незаполненое поле'),
    }),
  },
};
