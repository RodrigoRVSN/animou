import { Text, View } from 'react-native';
import { Button } from '../../../components/Button';
import { IAuthScreen } from '../../../routes/Auth/Auth.types';

export const UserInfo = ({ route, navigation }: IAuthScreen) => {
  const { params } = route;

  return (
    <View>
      <Text>{params.email}</Text>
      <Text>{params.password}</Text>
      <Button onPress={() => navigation.navigate('register')} label="oi" />
    </View>
  );
};
