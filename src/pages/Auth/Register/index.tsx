import { Text } from 'react-native';
import { Input } from '../../../components/Input';
import { AuthStack } from '../../../routes/Auth/Auth.types';
import { FormContainer } from '../components/FormContainer';

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
      <Input
        keyboardType="email-address"
        label="E-mail"
        placeholder="meuemail@gmai.com"
      />
      <Input label="Senha" placeholder="*********" isPassword />

      <S.ButtonRegister
        label="Cadastrar"
        onPress={console.log}
        color="orange_brand"
      />
    </FormContainer>
  );
};
