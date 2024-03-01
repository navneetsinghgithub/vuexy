import React, { useEffect, useState } from 'react'
import { httpFile } from '../../config/axiosConfig'
import { Link } from 'react-router-dom'

function Navbar() {

    const adminInfo = JSON.parse(localStorage.getItem("token"))
    // console.log(adminInfo, "adminInfo");
   
    const [data, setData] = useState()
    const getData = () => {
        try {
            httpFile.get(`/getAdminProfile/${adminInfo._id}`).then((res) => {
                // console.log(res,"jhhhhhhhh");
                setData(res.data.body)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getData()
    },[])




    return (
        <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
            <div className="navbar-container d-flex content">
                {/* {splitValue && <span>Split Value: {splitValue}</span>} */}
                <div className="bookmark-wrapper d-flex align-items-center">
                    <ul className="nav navbar-nav d-xl-none">
                        <li className="nav-item">
                            <a className="nav-link menu-toggle" href="#">
                                <i className="ficon" data-feather="menu" />
                            </a>
                        </li>
                    </ul>
                    {/* {splitValue && <span>Split Value: {splitValue}</span>} */}
                    <ul className="nav navbar-nav bookmark-icons">
                    </ul>
                    <ul className="nav navbar-nav">
                    </ul>
                </div>
                <ul className="nav navbar-nav align-items-center ms-auto">
                    <li className="nav-item dropdown dropdown-user">
                        <a
                            className="nav-link dropdown-toggle dropdown-user-link"
                            id="dropdown-user"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <div className="user-nav d-sm-flex d-none">
                                <span className="user-name fw-bolder">{data?.name}</span>
                                <span className="user-status">Admin</span>
                            </div>
                            <img height={"50px"} width={"70px"}
                                className="img-fluid rounded mb-100"
                                src={
                                    adminInfo?.image !== ""
                                        ? `http://localhost:1000/images/userImage/${data?.image
                                        }`
                                        : ``
                                }
                                alt="avatar img"
                            />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdown-user"
                        >
                            <Link to={`/profile/${adminInfo?._id}`}>  <a className="dropdown-item" href="page-profile.html">
                                <i className="me-50" data-feather="user" /> Profile
                            </a></Link> 

                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="page-account-settings.html">
                                <i className="me-50" data-feather="settings" /> Change Password
                            </a>

                            <a className="dropdown-item" href="page-auth-login-v2.html">
                                <i className="me-50" data-feather="power" /> Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar