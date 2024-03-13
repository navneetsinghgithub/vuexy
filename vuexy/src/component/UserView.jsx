import React, { useEffect, useState } from 'react'
import { httpFile } from '../../config/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

function UserView() {
    const [data, setData] = useState()

    const navigate = useNavigate()
    const { id } = useParams()
    const getData = () => {
        try {
            httpFile.get(`/findSingleUser/${id}`, data).then((res) => {
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
    }, [])

    const handleNavigate = (() => {
        navigate("/cusineTables")
    })


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
                                                        data?.image !== ""
                                                            ? `http://localhost:1000/images/userImage/${data?.image
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
                                                            value={data?.name || ''}
                                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            readOnly
                                                        />
                                                    </div>

                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="email">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={data?.email || ''}
                                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            readOnly
                                                        />
                                                    </div>

                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="email">
                                                            Contact
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={data?.phone || ''}
                                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                                            className="form-control"
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
                                                        Back
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

export default UserView
