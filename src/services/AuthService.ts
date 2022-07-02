class AuthService {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://animou-api-production.up.railway.app';
  }

  async registerUser(body: BodyInit) {
    return fetch(`${this.baseURL}/user/create-user`, {
      method: 'POST',
      body
    });
  }

  async validateEmail(email: string) {
    return await fetch(`${this.baseURL}/user/validate-email`, {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  }
}

export default new AuthService();
