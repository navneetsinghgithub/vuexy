import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function User() {
    const [data, setData] = useState()

    const getData = () => {
        try {
            axios.get("http://localhost:1000/findUser").then((res) => {
                console.log(res, "ressssssssssss");
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
                                    <button type="button" className="btn btn-primary">Add</button>
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
                                                    <div className="rounded- overflow  border-2 border-white">
                                                        <img height={"100px"} width={"100px"}
                                                            className="img-fluid rounded mb-50"
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
                                                <td>{e?.status}</td>
                                                <td>
                                          <Link to={"/edit"}><button type='button' className='btn btn-primary'>Edit</button></Link>          
                                                    &nbsp;
                                                    <button type='button' className='btn btn-danger'>Delete</button>
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













