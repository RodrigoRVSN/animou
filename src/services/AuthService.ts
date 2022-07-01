class AuthService {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://animou-api-production.up.railway.app/';
  }

  registerUser(body: BodyInit) {
    return fetch(`${this.baseURL}/user/validate-email`, {
      method: 'POST',
      body
    });
  }

  validateEmail(body: BodyInit) {
    return fetch(`${this.baseURL}/user/create-user`, {
      method: 'POST',
      body
    });
  }
}

export default new AuthService();
