import axios, {AxiosInstance} from 'axios';
import {LoginUser, RegisterUser} from '../types/api/register.api.types';

/* eslint-disable require-jsdoc */

class UsersAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/',
      withCredentials: true,
    });
  };
  async register({email, password, username}: RegisterUser) {
    try {
      await this.instance.post('/users', {
        email: email,
        password: password,
        username: username,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error!');
      } else {
        console.log('Error!');
      }
    }
  }
  async login({username, password}: LoginUser) {
    try {
      const result = await this.instance.post('/auth', {
        username: username,
        password: password,
      });
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error!');
      } else {
        console.log('Error!');
      }
    }
  }

  async profile(payload: {token: string}) {
    try {
      const result = await this.instance.get('/auth/profile', {
        headers: {
          'Authorization': `Bearer ${payload.token}`,
        },
      });
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error!');
      } else {
        console.log('Error!');
      }
    }
  }
}

export default new UsersAPI();
