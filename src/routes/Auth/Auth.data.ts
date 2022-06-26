import { Login, Register, Onboard } from '../../pages/Auth';
import { IAuthRoutes } from './Auth.types';

export const authRoutes: Array<IAuthRoutes> = [
  { name: 'login', component: Login },
  { name: 'register', component: Register },
  { name: 'onboard', component: Onboard }
];
