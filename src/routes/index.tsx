import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './App';
import { AuthRoutes } from './Auth';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
