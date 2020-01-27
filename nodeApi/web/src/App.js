import React from 'react'
import "./style.css"
import Routes from './routes'
import Header from './components/Header/index.js'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
