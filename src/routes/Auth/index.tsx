import { createStackNavigator } from '@react-navigation/stack';
import { authRoutes } from './routes.data';

const { Navigator, Screen } = createStackNavigator();

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
