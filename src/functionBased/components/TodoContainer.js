import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import TestHook from "./TestHook"
import Navbar from "./Navbar"

const TodoContainer = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TestHook />} />
        <Route path="/about" element={<About />} component={About} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  )
}

export default TodoContainer