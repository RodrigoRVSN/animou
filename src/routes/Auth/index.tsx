import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './Auth.types';
import { authRoutes } from './Auth.data';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="onboard"
      screenOptions={{
        headerShown: false
      }}
    >
      {authRoutes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
