import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
