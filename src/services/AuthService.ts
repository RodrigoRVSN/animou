import { IForm } from '../pages/Auth/Auth.types';
import { IRegisterUser } from './AuthService.types';

class AuthService {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://animou-api-production.up.railway.app';
  }

  async registerUser(body: IRegisterUser) {
    return await fetch(`${this.baseURL}/user/create-user`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  async validateEmail(email: string) {
    return await fetch(`${this.baseURL}/user/validate-email`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  async makeLogin(body: IForm) {
    console.log(body);
    return await fetch(`${this.baseURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }
}

export default new AuthService();
