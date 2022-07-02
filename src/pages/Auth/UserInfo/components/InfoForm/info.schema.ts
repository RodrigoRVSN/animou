import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  username: yup.string().required('Campo obrigatório')
});
