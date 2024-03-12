
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2"
import { httpFile } from '../../config/axiosConfig'

function User() {
    const [data, setData] = useState([])
    const isLoged = JSON.parse(localStorage.getItem("adminInfo") ? true : false)

    const getData = () => {
        try {
            httpFile.get("/findUser").then((res) => {
                // console.log(res, "responseeeeeeeeeeeeee")
                setData(res.data.body)
            }).catch((error) => {
                console.log(error, "error");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const deleteHandler = (id) => {
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
                    await httpFile.delete(`http://localhost:1000/deleteUser/${id}`).then((res) => {
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
            console.log(error)
        }
    }

    const handleChangeUpdateStatus = (e, id) => {
        const value = data?.map((u) => {
            if (u._id == id) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Status Updated Succesfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return { ...u, status: e.target.checked };
            }
            return u;
        });
        console.log(value, "value")
        value && setData(value);
        if (data && value) {

            const user = value?.filter((u) => u._id === id)[0];
            httpFile
                .put(`/status/${id}`, user)
                .then((res) => { })
                .catch((er) =>
                    console.log(
                        er.response && er.response.data.message
                            ? er.response.data.message
                            : er.message
                    )
                );

        }
    };




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
                                <div className="d-flex mt-1">
                                    <input className="form-control" style={{ marginLeft: "50rem", marginRight: "2rem" }} type="search" placeholder="Search" aria-label="Search" />
                                    <button type="button" className="btn btn-primary">search</button>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Image</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((e, key) => (
                                            <tr key={key}>
                                                <td>{e?.name}</td>
                                                <td>{e?.email}</td>
                                                <td>{e?.phone}</td>
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
                                                <td>{e?.role}</td>
                                                <td>
                                                    <div className="d-flex justify-content-start">
                                                        <div className="form-group">
                                                            <label className="custom-switch mt-2">
                                                                <input
                                                                    type="checkbox"
                                                                    name="status"
                                                                    className="form-check-input"
                                                                    checked={e?.status}
                                                                    onChange={(type) =>
                                                                        handleChangeUpdateStatus(type, e?._id)
                                                                    }
                                                                />
                                                                <span className="custom-switch-indicator"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <Link to={`/view/${e?._id}`}><button type='button' className='btn btn-primary'>View</button></Link>
                                                    &nbsp;
                                                    <Link to={`/edit/${e?._id}`}><button type='button' className='btn btn-primary'>Edit</button></Link>
                                                    &nbsp;
                                                    <button type='submit' onClick={() => {
                                                        deleteHandler(e?._id)
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

export default User













