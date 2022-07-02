import { Controller, useForm } from 'react-hook-form';
import * as S from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { IForm } from '../../Auth.types';
import { Input } from '@components/Input';

interface IGenericForm {
  buttonLabel: 'Cadastrar' | 'Entrar';
  onSubmit: (data: IForm) => Promise<void>;
}

export const GenericForm = ({ buttonLabel, onSubmit }: IGenericForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IForm>({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  });

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

      <S.ButtonSubmit
        label={buttonLabel}
        onPress={handleSubmit(onSubmit)}
        color="orange_brand"
        enabled={isValid}
      />
    </>
  );
};
