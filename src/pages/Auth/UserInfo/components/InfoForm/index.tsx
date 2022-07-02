import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { IUserInfo } from '../../UserInfo.types';
import { validationSchema } from './info.schema';

interface IInfoForm {
  onSubmit: (body: IUserInfo) => void;
}

export const InfoForm = ({ onSubmit }: IInfoForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IUserInfo>({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  });

  return (
    <>
      <Controller
        {...register('name')}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Nome"
            placeholder="meuemail@gmai.com"
            onChangeText={onChange}
            value={value}
            error={String(errors?.name?.message || '')}
          />
        )}
        name="name"
      />

      <Controller
        {...register('username')}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Nome de usuário"
            placeholder="rodrigorvsn"
            onChangeText={onChange}
            value={value}
            error={String(errors?.username?.message || '')}
          />
        )}
        name="username"
      />

      <Button
        label="Confirmar"
        onPress={handleSubmit(onSubmit)}
        color="orange_brand"
        enabled={isValid}
      />
    </>
  );
};
