
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from "react-router-dom";
import { httpFile } from "../../config/axiosConfig";

function Profile() {

    const [adminData, setAdminData] = useState()

    const { id } = useParams();
    const navigate = useNavigate()
    const getData = () => {
        try {
            httpFile.get(`/getAdminProfile/${id}`).then((res) => {
                setAdminData(res.data.body)
            }).catch((err) => {
                console.log(err.message);
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const handleNavigate = () => {
        navigate(`/edit/${adminData?._id}`)
    }

    return (
        <>
            <div className="app-content content "  >
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" style={{ width: "100%", }}>
                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        role="tabpanel"
                                        className="tab-pane active"
                                        id="account-vertical-general"
                                        aria-labelledby="account-pill-general"
                                        aria-expanded="true"
                                    >
                                        <div className="d-flex">
                                            <a href="#" className="me-25">
                                                <img

                                                    src={
                                                        adminData?.image !== ""
                                                            ? `http://localhost:1000/images/userImage/${adminData?.image
                                                            }`
                                                            : ``
                                                    }
                                                    alt="avatar img"
                                                />
                                            </a>
                                        </div>
                                        <form className="validate-form mt-2">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="name">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={adminData?.name || ''}
                                                            onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="email">
                                                            E-mail
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            value={adminData?.email || ''}
                                                            id="email"
                                                            name="email"
                                                            onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="phone">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={adminData?.phone || ''}
                                                            id="phone"
                                                            name="phone"
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-75">
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" onClick={handleNavigate} className="btn btn-primary mt-2 me-1">
                                                        Edit
                                                    </button>
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
        </>
    )
}

export default Profile
