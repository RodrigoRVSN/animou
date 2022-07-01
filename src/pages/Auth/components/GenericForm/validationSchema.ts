import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('O formato está errado')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Campo obrigatório')
});
