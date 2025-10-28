import React from 'react'
import './App.css'
import JQueryDemo from './components/JQueryDemo'
import GSAPDemo from './components/GSAPDemo'
import AnimeDemo from './components/AnimeDemo'

function App() {
  return (
    <div className="App" style={{ padding: 24 }}>
      <h1>Practica 4 - Demos de animación</h1>
      <section style={{ display: 'grid', gap: 24 }}>
        <JQueryDemo />
        <GSAPDemo />
        <AnimeDemo />
      </section>
    </div>
  )
}

export default App
