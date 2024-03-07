import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

function EditSubCategory() {
    const [data, setData] = useState()
    const [category, setCategory] = useState()
    const [selectCategory, setSelectCategory] = useState()
    
    const { id } = useParams()
    const navigate = useNavigate()

    const categoryFind = () => {
        try {
            httpFile.get("/findCategory").then((res) => {
                setCategory(res.data.body)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        categoryFind()
    }, [])

    const handleCategoryClick = (e) => {
        // console.log(e.target)
        setSelectCategory(e.target)
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value })
    }

    const getSingleData = () => {
        try {
            httpFile.get(`/findSingleSubCategory/${id}`, data).then((res) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target)
            formData.append("selectCategory", selectCategory)
            const data = await httpFile.put(`/updateSubCategory/${id}`, formData)
            // console.log(data, "data")
            setData(data.data.body)
            navigate("/subCategory")
        } catch (error) {
            console.log(error)
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
                                        <form onChange={handleChange} onSubmit={handleSubmit}
                                            className="validate-form mt-2">
                                            <div>
                                                <div className="col-12">
                                                    <div className="mb-1 row">
                                                        <label for="cars">Category</label>
                                                        <select onChange={handleCategoryClick} style={{ width: "100px", height: "30px", textAlign: "center" }}
                                                            name="categoryId" id="categoryId" >
                                                            <option hidden >Select</option>
                                                            {category?.map((e) => (
                                                                <option key={e?._id} value={e?._id}>
                                                                    {e?.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
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

export default EditSubCategory
