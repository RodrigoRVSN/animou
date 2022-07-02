import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { IAuthScreen } from '../../../routes/Auth/Auth.types';
import { validationSchema } from './info.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../../components/Input';
import AuthService from '../../../services/AuthService';

export interface IUserInfo {
  name: string;
  username: string;
}

export const UserInfo = ({ route, navigation }: IAuthScreen) => {
  const { email, password } = route.params;
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IUserInfo>({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  });

  const onSubmit = async ({ name, username }: IUserInfo) => {
    try {
      await AuthService.registerUser({ name, username, email, password });
      navigation.navigate('login');
    } catch {
      navigation.navigate('register');
    }
  };

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
        label="Criar conta"
        onPress={handleSubmit(onSubmit)}
        color="orange_brand"
        enabled={isValid}
      />
    </>
  );
};
