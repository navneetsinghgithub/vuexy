import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Layout from "./component/Layout"
import Dashboard from "./component/Dashboard"
import Login from "./component/Login"
import User from "./component/User"
import Updatee from "./Updatee"
import AddUser from "./component/AddUser"
import TermCondition from "./component/Cms/TermCondition"
import PrivacyPolicy from "./component/Cms/PrivacyPolicy"
import AboutUs from "./component/Cms/AboutUs"
import Profile from "./component/Profile"
import ChangePassword from "./component/ChangePassword"
import Category from "./component/Category/Category"
import SubCategory from "./component/Category/SubCategory"
import CategoryEdit from "./component/Category/CategoryEdit"
import CategoryView from "./component/Category/CategoryView"
import AddCategory from "./component/Category/AddCategory"
import SubCategoryView from "./component/Category/SubCategoryView"
import SubcategoryCreate from "./component/Category/SubcategoryCreate"
import EditSubCategory from "./component/Category/EditSubCategory"
import UserView from "./component/UserView"
import { ToastContainer ,toast} from 'react-toastify';
import CuisineTable from "./component/MuiDatatable/CuisineTable"


function App() {
  const navigate = useNavigate()
  const adminInfo = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    if (!adminInfo) {
      navigate('/')
    }
  }, [navigate])
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        {!adminInfo ? ""
          : <Route path="/" element={<Layout />}>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/edit/:id" element={<Updatee />} />
            <Route path="/view/:id" element={<UserView />} />
            <Route path="cusineTable" element={<CuisineTable/>}/>


            {/* //////CMS///// */}
            <Route path="/termsCondition" element={<TermCondition />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/aboutUs" element={<AboutUs />} />

            {/* ///// Admin  profile////// */}
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/changepassword/:id" element={<ChangePassword />} />

            {/* //////////Category///////// */}
            <Route path="/category" element={<Category />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/categoryedit/:id" element={<CategoryEdit />} />
            <Route path="/categoryview/:id" element={<CategoryView />} />

            {/* ///////Sub Category/////// */}
            <Route path="/SubCategory" element={<SubCategory />} />
            <Route path="/subCategoryCreate" element={<SubcategoryCreate />} />
            <Route path="/editSubCategory/:id" element={<EditSubCategory />} />
            <Route path="/SubCategoryView/:id" element={<SubCategoryView />} />








          </Route>}

        <Route path="/add" element={<AddUser />} />
      </Routes>
      <ToastContainer/>


    </>
  )
}

export default App
