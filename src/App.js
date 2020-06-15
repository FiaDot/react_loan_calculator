import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./components/HeaderBar";
import LoanCalculator from "./components/LoanCalculator";

function App() {
  return (
      <div>
          <HeaderBar />

          <LoanCalculator/>
      </div>
  );
}

export default App;
