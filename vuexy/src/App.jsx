import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Layout from "./component/Layout"
import Dashboard from "./component/Dashboard"
import Login from "./component/Login"
import Updatee from "./Updatee"
import TermCondition from "./component/Cms/TermCondition"
import PrivacyPolicy from "./component/Cms/PrivacyPolicy"
import AboutUs from "./component/Cms/AboutUs"
import Profile from "./component/Profile"
import Category from "./component/Category/Category"
import SubCategory from "./component/Category/SubCategory"
import CategoryEdit from "./component/Category/CategoryEdit"
import CategoryView from "./component/Category/CategoryView"
import AddCategory from "./component/Category/AddCategory"
import SubCategoryView from "./component/Category/SubCategoryView"
import SubcategoryCreate from "./component/Category/SubcategoryCreate"
import EditSubCategory from "./component/Category/EditSubCategory"
import UserView from "./component/UserView"
import { ToastContainer, toast } from 'react-toastify';
import CusineTables from "./component/MuiDatatable/CusineTables"
import PageNotFound from "./component/PageNotFound"
import ChangPasswrd from "./component/ChangPasswrd"



function App() {
  const navigate = useNavigate()
  const adminInfo = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    if (!adminInfo?.token) {
      navigate('/')
    }
  }, [navigate])
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        {adminInfo?.token ?
          <Route path="/" element={<Layout />}>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/edit/:id" element={<Updatee />} />
            <Route path="/view/:id" element={<UserView />} />
            <Route path="/cusineTables" element={<CusineTables />} />

            {/* //////CMS///// */}
            <Route path="/termsCondition" element={<TermCondition />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/aboutUs" element={<AboutUs />} />

            {/* ///// Admin  profile////// */}
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/changPasswrd/:id" element={<ChangPasswrd />} />

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
          </Route>
          : <Route path="*" element={<PageNotFound />} />
        }
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <ToastContainer />


    </>
  )
}

export default App
