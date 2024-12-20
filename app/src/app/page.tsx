import React from "react"
import {
  Routes,
  Route
} from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Navbar from "./components/navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects /> 
    </>
  )
}
