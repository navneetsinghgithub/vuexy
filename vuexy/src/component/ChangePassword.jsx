import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { httpFile } from '../../config/axiosConfig'

function ChangePassword() {

    const adminInfo = JSON.parse(localStorage.getItem("token"))
  
    const [data, setData] = useState()
    const navigate = useNavigate()


    const handlechange = (e) => {    
        console.log(e)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const getData = (e) => {
        e.preventDefault()
        try {
            httpFile.put(`/changePassword/${adminInfo?._id}`, data,
                // {
                //     headers: {
                //         Authorization: `Bearer ${adminInfo?.token}`
                //     }
                // }
            ).then((res) => {

                // console.log(res.data, "yyyyyyyyyyyyyyyyyyyyyyyyyy");
                // return
                setData(res.data.body)
                
                navigate(`/cusineTables`)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }

    return (
        <>
            <div className="app-content content ">
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-body">
                        <section className="app-user-list">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <div className="card mt-5">
                                            <div className="card-body">
                                                <h2 className="card-title text-center">Change Password</h2>
                                                <div className="section-body ">
                                                    <div className="card mb-0 py-4 bg-transparent shadow-none">
                                                        <form action="" onSubmit={getData} onChange={handlechange}>
                                                            {" "}
                                                            <div className="container">
                                                                <div className="row">
                                                                    {/* <div className="col-lg-4 d-flex align-items-start justify-content-center ">
                                                            <div className="card-footer profile_tab_link w-100 p-2 d-flex flex-column shadow bg-white align-items-start">
                                                                <Link
                                                                    className="nav-link px-0 w-100 d-block text-start"
                                                                    to={`/adminProfile`}
                                                                >
                                                                    <button className="btn w-100 d-block ">Profile</button>
                                                                </Link>
                                                                <Link
                                                                    className="nav-link px-0 w-100 d-block text-start "
                                                                    to={`/changePassword`}
                                                                >
                                                                    <button className="btn w-100 d-block active">
                                                                        Change Password
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div> */}
                                                                    <div className="col-lg-8 ">
                                                                        <div className="about-text go-to shadow p-3 rounded h-100 text-left card">
                                                                            {/* <h5 className="dark-color mb-4 p-md-0 ">
                                                                    Change Password
                                                                </h5> */}

                                                                            <h6 className="theme-color lead"></h6>
                                                                            <div className=" about-list">
                                                                                <div className="media pro_file_Set border-0">
                                                                                    <label htmlFor="oldPassword" style={{ color: "black" }}>
                                                                                        Current Password:
                                                                                    </label>
                                                                                    <input
                                                                                        id="password"
                                                                                        type="password"

                                                                                        className="form-control pwstrength"
                                                                                        name="password"
                                                                                        tabIndex="1"
                                                                                        required
                                                                                    />
                                                                                </div>
                                                                                <div className="media pro_file_Set border-0">
                                                                                    <label htmlFor="newPassword" style={{ color: "black" }}>
                                                                                        New Password:
                                                                                    </label>

                                                                                    <input
                                                                                        id="newPassword"
                                                                                        type="password"
                                                                                        className="form-control pwstrength"
                                                                                        data-indicator="pwindicator"
                                                                                        name="newPassword"
                                                                                        tabIndex="2"
                                                                                        required
                                                                                    />
                                                                                </div>
                                                                                <div className="media pro_file_Set border-0">
                                                                                    <label htmlFor="confirmPassword" style={{ color: "black" }}>
                                                                                        Confirm Password:
                                                                                    </label>

                                                                                    <input
                                                                                        id="confirmPassword"
                                                                                        type="password"

                                                                                        className="form-control"
                                                                                        name="confirmPassword"
                                                                                        tabIndex="2"
                                                                                        required
                                                                                    />
                                                                                </div>
                                                                                <button
                                                                                    className="btn btn-outline-primary mx-auto "
                                                                                    type="submit"
                                                                                >
                                                                                    {" "}
                                                                                    Save
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ChangePassword
