
import { axiosInstance } from './api.js';

class AuthApi {
  constructor() {
    this.instance = axiosInstance;
  }

  async getToken({username, password}) {
    try {
      const response = await this.instance.post('token', {username, password});
      return response.data;  
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUser(id) {
    const response = await this.instance.get(`accounts/${id}`);
    return response.data;
  }

  async setAccount (data) { 
    try { 
      const responce = await this.instance.post('accounts',data)
       return responce.data
    }

    catch (error) { 
      console.log(error);
      throw error;
    }
  }


}

export const authApi = new AuthApi();


