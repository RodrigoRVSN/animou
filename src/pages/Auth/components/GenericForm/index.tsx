import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import * as S from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';

interface IGenericForm {
  buttonLabel: 'Cadastrar' | 'Entrar';
}

export const GenericForm = ({ buttonLabel }: IGenericForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  });

  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <>
      <Controller
        {...register('email')}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            keyboardType="email-address"
            label="E-mail"
            placeholder="meuemail@gmai.com"
            onChangeText={onChange}
            value={value}
            error={String(errors?.email?.message || '')}
          />
        )}
        name="email"
      />

      <Controller
        {...register('password')}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Senha"
            placeholder="*********"
            isPassword
            onChangeText={onChange}
            value={value}
            error={String(errors?.password?.message || '')}
          />
        )}
        name="password"
      />

      <S.ButtonRegister
        label={buttonLabel}
        onPress={handleSubmit(onSubmit)}
        color="orange_brand"
        enabled={isValid}
      />
    </>
  );
};
