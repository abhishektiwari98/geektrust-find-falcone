import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Result /> */}
      <Footer />
    </div>
  );
}

export default App;
