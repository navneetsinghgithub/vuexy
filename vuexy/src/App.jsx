import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import Dashboard from "./component/Dashboard"
import Login from "./component/Login"
import User from "./component/User"
import Footer from "./component/Footer"

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/user" element={<User />} />

        </Route>
        <Route path="/footer" element={<Footer />} />

      </Routes>


    </>
  )
}

export default App
