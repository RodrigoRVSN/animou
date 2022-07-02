import { IAuthScreen } from '@routes/Auth/Auth.types';
import AuthService from '@services/AuthService';
import { Text } from 'react-native';
import type { IForm } from '../Auth.types';
import { FormContainer } from '../components/FormContainer';
import { GenericForm } from '../components/GenericForm';

import * as S from './styles';

export const Login = ({ navigation }: IAuthScreen) => {
  const goToRegister = () => {
    navigation.navigate('register');
  };

  const handleSubmit = async (body: IForm) => {
    try {
      const response = await AuthService.makeLogin(body);
      const token = await response.json();
      navigation.navigate('home');
    } catch {
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
