import React, { useState } from 'react';

import Login from './src/screens/Login';
import Home from './src/screens/Home';

export default function App() {

  const [logado, setLogado] = useState(false);

  if (logado) {

    return (
      <Home
        sair={() => setLogado(false)}
      />
    );

  }

  return (
    <Login
      entrar={() => setLogado(true)}
    />
  );

}