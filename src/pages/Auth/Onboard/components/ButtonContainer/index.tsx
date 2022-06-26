import { Button } from '../../../../../components/Button';
import * as S from './styles';
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AuthStack } from '../../../../../routes/Auth/Auth.types';

interface IButtonContainer {
  isLastStep: boolean;
  handleNextStep: () => void;
}

export const ButtonContainer = ({
  isLastStep,
  handleNextStep
}: IButtonContainer) => {
  const { navigate } = useNavigation<AuthStack>();

  const goToRegister = () => {
    navigate('register');
  };

  const goToLogin = () => {
    navigate('login');
  };

  return (
    <S.ButtonContainer isLastStep={isLastStep}>
      {isLastStep ? (
        <>
          <Button
            label="Cadastro"
            onPress={goToRegister}
            color="orange_brand"
          />
          <Button label="Login" onPress={goToLogin} />
        </>
      ) : (
        <Button label={<Icon name="right" />} onPress={handleNextStep} />
      )}
    </S.ButtonContainer>
  );
};
