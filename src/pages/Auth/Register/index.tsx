import { Text } from 'react-native';
import { AuthStack } from '../../../routes/Auth/Auth.types';
import { FormContainer } from '../components/FormContainer';
import { GenericForm } from '../components/GenericForm';

import * as S from './styles';

interface IRegister {
  navigation: AuthStack;
}

export const Register = ({ navigation }: IRegister) => {
  const goToLogin = () => {
    navigation.navigate('login');
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
      <GenericForm buttonLabel="Cadastrar" />
    </FormContainer>
  );
};
