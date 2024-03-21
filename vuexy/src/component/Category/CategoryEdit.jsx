import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
            const formData = new FormData(e.target)
            formData.append("image", image)
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
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div class="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left">
                            <div className="row breadcrumbs-top">
                                <section id="basic-horizontal-layouts" className="mt-5">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-5 col-10 w-50">
                                            <div className="card">
                                                <form onChange={handlechange} onSubmit={updateData}
                                                    className="validate-form mt-2">
                                                    <div className="row">
                                                        <div className="row p-2">
                                                            <div className="col-12">
                                                                <div className="mb-1 row">
                                                                    <div className="col-sm-3 w-10">
                                                                        <label className="col-form-label" for="name">Name</label></div>
                                                                    <div className="col-sm-9">
                                                                        <input type="text" id="name" class="form-control" name="name" placeholder=" Name" />
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
                                                                            id="image"
                                                                            className="form-control"
                                                                            // value={data?.image}
                                                                            name="image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9 ms-auto offset-sm-1">
                                                                <button type="submit" className="btn btn-primary me-1">
                                                                    Update
                                                                </button>
                                                              <Link to={"/category"}> <button type="submit" className="btn btn-primary me-1">
                                                                    Back
                                                                </button></Link> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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

export default CategoryEdit
