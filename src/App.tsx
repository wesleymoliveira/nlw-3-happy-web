import React from 'react';
import  GlobalStyle from  '../src/styles/global';

import  './styles/global.ts';
import { AuthProvider } from '../src/contexts/auths';

import Routes from '../src/routes'

function App() {
  return (
    <AuthProvider>
    <GlobalStyle />
        <Routes />
    </AuthProvider>
  );
}

export default App;
