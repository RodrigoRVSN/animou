import { createStackNavigator } from '@react-navigation/stack';
import { appRoutes } from './App.data';
import { RootStackParamList } from './App.types';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false
      }}
    >
      {appRoutes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
