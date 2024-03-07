import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SubcategoryCreate() {
    const [data, setData] = useState([])
    const [selectCategory, setSelectCategory] = useState()
    const navigate = useNavigate()
    const getData = () => {
        try {
            httpFile.get("/findCategory").then((res) => {
                console.log(res.data)
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

    const selectCategoryData = (e) => {
        setSelectCategory(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target)
            formData.append("selectCategory", setSelectCategory)
            const data = await httpFile.post("addSubCategory", formData)
            navigate("/subCategory")
        } catch (error) {
            console.log(error)
        }
    }
    return (


        <div className="app-content content ">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="app-user-list">
                        <div className="card mt-3">
                            <div className="col-sm-9 offset-sm-3">
                            </div>
                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label for="cars">Category</label>

                                    <select name="categoryId" id="cars" onChange={(e) => { selectCategoryData(e) }}>
                                        <option >Select</option>
                                        {console.log(data, "jjj")}
                                        {data?.map((e) => (
                                            <option key={e?._id} value={e?._id}>
                                                {e?.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <label htmlFor="">Name</label>
                                <input type="text" name='name' />
                                <label htmlFor="">Image</label>

                                <input type="file" name='image' />
                                <button type='submit' >Click</button>
                            </form>

                        </div>
                    </section>
                </div>
            </div>
        </div>



    )
}

export default SubcategoryCreate
