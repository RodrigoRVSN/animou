import { Login, Register, Onboard, UserInfo } from '../../pages/Auth';
import { IAuthRoutes } from './Auth.types';

export const authRoutes: Array<IAuthRoutes> = [
  { name: 'login', component: Login },
  { name: 'register', component: Register },
  { name: 'onboard', component: Onboard },
  { name: 'userInfo', component: UserInfo }
];
