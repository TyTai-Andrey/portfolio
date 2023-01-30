import * as Yup from 'yup';

export const callShapes = {
  form: {
    //initial data for the form
    shape: {
      name: '',
      phone: '',
    },

    //scheme for checking the form for errors
    schema: Yup.object().shape({
      name: Yup.string()
        .min(4, 'Имя должно содержать хотя бы 4 символа')
        .required('Незаполненое поле')
        .typeError('Незаполненое поле'),
      phone: Yup.string()
        .min(11, 'Номер должен содержать 11 цифр')
        .required('Незаполненое поле')
        .typeError('Незаполненое поле'),
    }),
  },
};
