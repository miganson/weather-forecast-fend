import React from 'react'
import Home from './components/Home'
import Program from './components/Program'
import Rates from './components/Rates'
import Coaches from './components/Coaches'
import maleFemaleKicking from './assets/Male and Female Kicking Same Bag_Zoomed No Text.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Home id="home" />
      <section className="mobile-img-section">
        <img className="mobile-only-img" src={maleFemaleKicking} alt="Muay Thai" />
      </section>
      <Program id="program" />
      <Rates id="rates" />
      <Coaches id="coaches" />
    </div>
  )
}

export default App
