import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { Reader } from './features/Reader';
import { NavBar } from './features/NavBar/NavBar';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Reader />
    </div>
  );
}

export default App;
