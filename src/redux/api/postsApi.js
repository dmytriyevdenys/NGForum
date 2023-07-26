import { axiosInstance } from './api.js';

class PostApi { 
    constructor () {
        this.instance = axiosInstance; 
    }

    async getPosts () { 
        try {
            const response = await this.instance.get('questions')
            const data = response.data
            return data
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async setPost (data) {
        try { 
            const response = await this.instance.post('questions', data, { 
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            
            })
            const result = response.data
            return result
        }

        catch(error) { 
            console.log(error);
            throw error;
        }
       }  
}

export const postAPi = new PostApi()
