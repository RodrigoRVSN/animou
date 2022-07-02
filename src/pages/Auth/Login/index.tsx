import { IAuthScreen } from '@routes/Auth/Auth.types';
import AuthService from '@services/AuthService';
import { Text } from 'react-native';
import type { IForm } from '../Auth.types';
import { FormContainer } from '../components/FormContainer';
import { GenericForm } from '../components/GenericForm';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import { setToken } from '@store/features/authSlice';

export const Login = ({ navigation }: IAuthScreen) => {
  const dispatch = useDispatch();

  const goToRegister = () => {
    navigation.navigate('register');
  };

  const handleSubmit = async (body: IForm) => {
    try {
      const response = await AuthService.makeLogin(body);
      const { access_token } = await response.json();
      dispatch(setToken(access_token));
    } catch (error) {
      goToRegister();
    }
  };

  return (
    <FormContainer
      description={`Entre para a maior comunidade\nde otakus e divirta-se`}
      redirectText={
        <Text>
          Novo no animou?{' '}
          <S.LoginLink onPress={goToRegister}>Crie uma conta</S.LoginLink>
        </Text>
      }
    >
      <GenericForm buttonLabel="Entrar" onSubmit={handleSubmit} />
    </FormContainer>
  );
};
