import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { httpFile } from '../config/axiosConfig'

function Updatee() {
    const [data, setData] = useState()

    const { id } = useParams()
    const navigate = useNavigate()

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value })
    }
    const getSingleData = () => {
        try {
            httpFile.get(`http://localhost:1000/findSingleUser/${id}`, data).then((res) => {
                setData(res.data.body)
               
            }).catch((error) => {
                console.log(error, "error");
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
    httpFile.put(`http://localhost:1000/updateUser/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                setData(res.data.body)
                navigate("/user")
                window.location.reload()
            }).catch((err) => {
                console.log(err, "error");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }


    return (
        <>
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper container-xxl p-0">
                    <div class="content-header row">
                        <div class="content-header-left">
                            <div class="row breadcrumbs-top">
                                <section id="basic-horizontal-layouts">
                                    <div class="row">
                                        <div class="col-md-5 col-10 w-50">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">User Update Form</h4>
                                                </div>
                                                <div class="card-body">
                                                    <form onChange={handlechange} onSubmit={updateData}>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-1 row">
                                                                    <div className="col-sm-3 w-10   ">
                                                                        <label className="col-form-label" for="name">
                                                                            First Name
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-sm-9">
                                                                        <input
                                                                            type="text"
                                                                            id="name"
                                                                            className="form-control"
                                                                            name="name"
                                                                            value={data?.name}
                                                                            placeholder="First Name"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                <div className="mb-1 row">
                                                                    <div className="col-sm-3">
                                                                        <label className="col-form-label" for="phone">
                                                                            Phone
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-sm-9">
                                                                        <input
                                                                            type="number"
                                                                            id="Phone"
                                                                            className="form-control"
                                                                            name="phone"
                                                                            value={data?.phone}
                                                                            placeholder="Phone"
                                                                        />
                                                                    </div>
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
                                                                            id="file"
                                                                            className="form-control"
                                                                            // value={data?.image}
                                                                            name="image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-9 offset-sm-3">
                                                                <button type="submit" className="btn btn-primary me-1">
                                                                    Update
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Updatee
