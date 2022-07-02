import AuthService from '@services/AuthService';
import { IAuthScreen } from '@routes/Auth/Auth.types';
import { Text } from 'react-native';
import { IForm } from '../Auth.types';
import { FormContainer } from '../components/FormContainer';
import { GenericForm } from '../components/GenericForm';

import * as S from './styles';

export const Register = ({ navigation }: IAuthScreen) => {
  const goToLogin = () => {
    navigation.navigate('login');
  };

  const handleSubmit = async ({ email, password }: IForm) => {
    try {
      await AuthService.validateEmail(email);

      navigation.navigate('userInfo', {
        email,
        password
      });
    } catch {
      goToLogin();
    }
  };

  return (
    <FormContainer
      description={`Participe da maior comunidade\nde otakus.`}
      redirectText={
        <Text>
          Já possui conta? <S.LoginLink onPress={goToLogin}>Entre</S.LoginLink>
        </Text>
      }
    >
      <GenericForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </FormContainer>
  );
};
