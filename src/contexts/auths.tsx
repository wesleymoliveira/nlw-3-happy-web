import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email:string , password: string): any;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => { 
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] =useState(false);

  useEffect(()=> {
    async function loadStorageData() {
     const storagedUser =  await window.localStorage.getItem('@Happy:user');
     const storagedToken = await window.localStorage.getItem('@Happy:token');
     

     if ( storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
       setUser(JSON.parse(storagedUser));
     } 
    }
    loadStorageData();
  }, []);

  async function  signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);
    //const response:any = await api.post('/sessions', { email, password })

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await window.localStorage.setItem('@Happy:user', JSON.stringify(response.user));
    await window.localStorage.setItem('@Happy:token', (response.token));
  }

  function signOut(){
    setUser(null);
    window.localStorage.clear();
  }

  return (
  <AuthContext.Provider value={{ signed: !!user,  user, loading, signIn, signOut }} >
    {children}
  </AuthContext.Provider>
  );
};

export function useAuth(){
  const context =useContext(AuthContext);
  return context;
}