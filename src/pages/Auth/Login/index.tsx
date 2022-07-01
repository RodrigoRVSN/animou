import { Text } from 'react-native';
import { AuthStack } from '../../../routes/Auth/Auth.types';
import { FormContainer } from '../components/FormContainer';
import { GenericForm } from '../components/GenericForm';

import * as S from './styles';

interface IRegister {
  navigation: AuthStack;
}

export const Login = ({ navigation }: IRegister) => {
  const goToRegister = () => {
    navigation.navigate('register');
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
      <GenericForm buttonLabel="Entrar" />
    </FormContainer>
  );
};
