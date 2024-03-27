
import React, { useEffect, useState } from "react"
import { httpFile } from "../../../config/axiosConfig"
import { useNavigate } from "react-router-dom"


function SubcategoryCreate() {
    const [category, setCategory] = useState()
    const [selectcategory, setselectcategory] = useState()
    const [data, setData] = useState()

    const navigate = useNavigate()

    const getData = () => {
        try {
            httpFile.get("/findCategory").then((res) => {
                console.log(res, "ressssssss");
                setCategory(res.data.body)
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

    const handleselectcate = (e) => {
        setselectcategory(e.target)
    }

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target)
            formData.append("selectcategory", selectcategory)
            await httpFile.post("/addSubCategory", formData)
            setData(data.body)
            navigate("/subCategory")
        } catch (error) {
            console.log(error, "error");
        }
    }

    return (
        <>
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left">
                            <div className="row breadcrumbs-top">
                                <section id="basic-horizontal-layouts" className="mt-5">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-5 col-10 w-50">
                                            <div className="card">
                                                <h2 className="p-2 pb-0 mb-0">Add Category</h2>
                                                <form onSubmit={handlesubmit} onChange={handlechange}>
                                                    <div className="row p-2">
                                                        <div className="col-12">
                                                            <div className="mb-1 row">
                                                                <div className="col-sm-3 w-10   ">
                                                                    <label className="col-form-label" for="categoryId">category</label></div>
                                                                <div className="col-sm-9">
                                                                    <select className="w-30 bg-dark bg-gradient text-white" style={{ padding: "7px 5px" }} name="categoryId" id="categoryId">
                                                                        <option onChange={handleselectcate}>select</option>
                                                                        {category?.map((e) => (
                                                                            <option key={e._id} value={e?._id}>
                                                                                {e?.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="mb-1 row">
                                                                <div className="col-sm-3 w-10   ">
                                                                    <label className="col-form-label" for="name">Name</label></div>
                                                                <div className="col-sm-9">
                                                                    <input type="text" id="name" class="form-control" name="name" placeholder=" Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="mb-1 row">
                                                                <div className="col-sm-3">
                                                                    <label for="image" class="image">image</label>
                                                                </div>
                                                                <div className="col-sm-9">
                                                                    <input type="file" id="file" class="form-control" name="image" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-9 offset-sm-3">
                                                            <button type="submit" class="btn btn-primary me-1">Submit</button>
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
                </div >
            </div >

        </>
    )
}
export default SubcategoryCreate