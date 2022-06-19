import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './Auth';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
