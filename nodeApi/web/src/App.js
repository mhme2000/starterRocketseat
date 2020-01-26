import React from 'react'
import "./style.css"
import api from './services/api'

import Header from './components/Header/index.js'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
