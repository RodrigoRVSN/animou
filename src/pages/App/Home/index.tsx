import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

export const Home = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>{token}</Text>
    </View>
  );
};
