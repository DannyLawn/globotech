import React from 'react';
import { Header } from '../Header/Header';
import { Description } from '../Description/Description';
import { Products } from '../Products/Products';
import { Technology } from '../Technology/Technology';
import { LineFx } from '../LineFx/LineFx';
import { Footer } from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__content">
      </main>
      <Description />
      <Technology />
      {/* 
      <Products />
       */}
      <LineFx />
      <Footer />
    </div>
  );
}

export default App;
