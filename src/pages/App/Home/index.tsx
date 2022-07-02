import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { Button } from '@components/Button';
import { clearToken } from '@store/features/authSlice';

export const Home = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Text>{token}</Text>
      <Button onPress={() => dispatch(clearToken())} label="Sair" />
    </View>
  );
};
