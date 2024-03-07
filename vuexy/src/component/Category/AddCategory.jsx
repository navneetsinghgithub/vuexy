import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
    const [data, setData] = useState()

    const navigate = useNavigate()
   
    const handlechange = ((e) => {      
        setData({ ...data, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value })
    })

    const addCategoryUser = (e) => {
        e.preventDefault()
        try {
            httpFile.post("/createCategory", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                setData(res.data.body)
                navigate("/category")
            }).catch((err) => {
                console.log(err, "err");
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
                                                    <h4 class="card-title">Add Category Form</h4>
                                                </div>
                                                <div class="card-body">
                                                    <form onSubmit={addCategoryUser} onChange={handlechange} >
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-1 row">
                                                                    <div className="col-sm-3 w-10   ">
                                                                        <label className="col-form-label" for="name">
                                                                            Name
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-sm-9">
                                                                        <input
                                                                            type="text"
                                                                            id="name"
                                                                            className="form-control"
                                                                            name="name"
                                                                            placeholder=" Name"
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
                                                                            name="image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-sm-9 offset-sm-3">
                                                                <button type="submit" className="btn btn-primary me-1">
                                                                    Submit
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

export default AddCategory
