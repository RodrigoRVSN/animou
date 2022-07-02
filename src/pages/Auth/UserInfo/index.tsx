import { IAuthScreen } from '@routes/Auth/Auth.types';
import AuthService from '@services/AuthService';
import { FormContainer } from '../components/FormContainer';
import { InfoForm } from './components/InfoForm';
import { IUserInfo } from './UserInfo.types';

export const UserInfo = ({ route, navigation }: IAuthScreen) => {
  const { email, password } = route.params;

  const handleSubmit = async ({ name, username }: IUserInfo) => {
    try {
      await AuthService.registerUser({ name, username, email, password });
      navigation.navigate('login');
    } catch {
      navigation.navigate('register');
    }
  };

  return (
    <FormContainer
      description={`Insira as informações para\ncompletar seu perfil`}
    >
      <InfoForm onSubmit={handleSubmit} />
    </FormContainer>
  );
};
