import React from 'react';
import './App.css';
import PizzaList from './components/PizzaList';
import AddPizzaForm from './components/AddPizzaForm';


function App() {
  return (
    <div>
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
