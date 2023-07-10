import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './views/Home'
import Show from './views/Show'
import Pokemons from './views/Pokemons'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="max-w-screen-xl flex mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons/" element={<Pokemons></Pokemons>} />
            <Route path="/pokemons/:name" element={<Show></Show>} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  )
}

export default App
