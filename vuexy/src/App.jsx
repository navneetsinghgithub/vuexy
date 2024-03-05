import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import Dashboard from "./component/Dashboard"
import Login from "./component/Login"
import User from "./component/User"
import Footer from "./component/Footer"
import Updatee from "./Updatee"
import AddUser from "./component/AddUser"
import TermCondition from "./component/Cms/TermCondition"
import PrivacyPolicy from "./component/Cms/PrivacyPolicy"
import AboutUs from "./component/Cms/AboutUs"
import Profile from "./component/Profile"
import ChangePassword from "./component/ChangePassword"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/edit/:id" element={<Updatee />} />
          <Route path="/termsCondition" element={<TermCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* /////profile////// */}
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/changepassword/:id" element={<ChangePassword />} />




       


        </Route>
        <Route path="/footer" element={<Footer />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>


    </>
  )
}

export default App
