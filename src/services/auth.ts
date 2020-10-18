import api from '../services/api';

interface Response {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  }
}

export function signIn(email : string, password: string):Response | any {
  api.post('sessions', { email, password }).then(res => res)
 }
