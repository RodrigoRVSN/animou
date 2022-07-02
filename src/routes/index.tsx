import { NavigationContainer } from '@react-navigation/native';
import { RootState } from '@store/index';
import { AppRoutes } from './App';
import { AuthRoutes } from './Auth';
import { useSelector } from 'react-redux';

export const Routes = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
