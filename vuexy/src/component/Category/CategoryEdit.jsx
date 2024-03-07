import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

function CategoryEdit() {
    const [data, setData] = useState()

    const navigate = useNavigate()
    const { id } = useParams()
    const handlechange = (e) => {
     
        setData({ ...data, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value })
    }

    const getSingleData = () => {
        try {
            httpFile.get(`/findSingleCategory/${id}`, data).then((res) => {
                setData(res.data.body)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getSingleData()
    }, [])

    const updateData = (e) => {
        e.preventDefault()
        try {
            const formData=new FormData(e.target)
            formData.append("image",image)
            httpFile.put(`/updateCategory/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {               
                setData(res.data.body)
                navigate("/category")
            })
        } catch (error) {
            console.log(error, "error");
        }
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
                                        <form onChange={handlechange} onSubmit={updateData}
                                            className="validate-form mt-2">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1 row">
                                                        <label className="form-label" htmlFor="name">
                                                            Name
                                                        </label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                value={data?.name}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-1 row">
                                                            <div className="col-sm-3">
                                                                <label for="image" className="image" >
                                                                    image
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <input
                                                                    type="file"
                                                                    id="image"
                                                                    className="form-control"
                                                                    // value={data?.image}
                                                                    name="image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-12 mt-75">
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary mt-2 me-1">
                                                        Update
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

export default CategoryEdit
