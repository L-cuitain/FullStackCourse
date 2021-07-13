//引入useContext
import React from 'react';

import Toolbar from './components/Toolbar';

import ThemeContext from './context/context';

import themes from './theme';

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
