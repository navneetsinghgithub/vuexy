import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Category() {
    const [data, setData] = useState()

    const getData = () => {
        try {
            httpFile.get("/findCategory").then((res) => {
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

    const deletehandler = (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await httpFile.delete(`/deleteCategory/${id}`).then((res) => {
                        getData()
                    })
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        } catch (error) {

        }
    }

    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <section className="app-user-list">
                            <div className="card mt-3">
                                <div className="d-flex mt-0"  >
                                    <Link to={"/addcategory"}><button type="submit" className="btn btn-primary me-0">
                                        Add Category
                                    </button></Link>
                                </div>
                                <div className="d-flex mt-1">
                                    <input className="form-control" style={{ marginLeft: "50rem", marginRight: "2rem" }} type="search" placeholder="Search" aria-label="Search" />
                                    <button type="button" className="btn btn-primary">search</button>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((e, key) => (
                                            <tr key={key}>
                                                <td>{e?.name}</td>
                                                <td>
                                                    <div className="rounded- overflow  border-1 border-white">
                                                        <img height={"50px"} width={"70px"}
                                                            className="img-fluid rounded mb-100"
                                                            src={
                                                                e?.image !== ""
                                                                    ? `http://localhost:1000/images/userImage/${e?.image
                                                                    }`
                                                                    : ``
                                                            }
                                                            alt="avatar img"
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <Link to={`/categoryview/${e?._id}`}> <button type='button' className='btn btn-success'>View</button></Link>
                                                    &nbsp;
                                                    <Link to={`/categoryedit/${e?._id}`}><button type='button' className='btn btn-primary'>Edit</button></Link>
                                                    &nbsp;
                                                    <button type='submit' onClick={() => {
                                                        deletehandler(e?._id)
                                                    }} className='btn btn-danger'>Delete</button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category
