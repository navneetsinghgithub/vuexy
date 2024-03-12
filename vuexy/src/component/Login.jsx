import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpFile } from '../../config/axiosConfig'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const [data, setdata] = useState()
    const [validation, setValidation] = useState()
    const navigate = useNavigate()

    const handlechange = (e) => {
        if (e.target.name == "email") {
            setValidation("");
        }
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const getdata = (e) => {
        e.preventDefault()
        try {
            if (validation == undefined || validation?.email == "") {
                setValidation("This field is required");
                return Error;
            }
            if (validation == undefined || validation?.password == "") {
                setValidation("This field is required");
                return Error;
            }
            httpFile.post("/login", data).then((res) => {
                if (res.data.body.role == 0) {
                    if (res.data.status != 400) {
                        setdata(res.data.body)
                        localStorage.setItem("token", JSON.stringify(res.data.body))
                        navigate("/dash")
                        toast.success("Succesfully logged in")
                     
                    }
                }


                else {
                    alert("email or password not correct")
                }
            }).catch((error) => {
                console.log(error, "error");
            })
        } catch (error) {
            console.log(error, "error");
        }

    }



    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper">
                    <div className="content-header row"></div>
                    <div className="content-body">
                        <div className="auth-wrapper auth-v2">
                            <div className="auth-inner row m-0">
                                <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                        <h2 className="card-title fw-bold mb-1">Welcome to Vuexy! 👋</h2>
                                        <p className="card-text mb-2">
                                            Please sign-in to your account and start the adventure
                                        </p>
                                        <form onSubmit={getdata} onChange={handlechange}>
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="login-email">
                                                    Email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id=" login-email"
                                                    type="text"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    aria-describedby="login-email"
                                                    autofocus=""
                                                    tabIndex={1}
                                                    required
                                                />
                                                <p className="m-0 error_text" style={{ color: "red" }}>
                                                    {validation}
                                                </p>
                                            </div>
                                            <div className="mb-1">
                                                <div className="d-flex justify-content-between">
                                                    <label className="form-label" htmlFor="login-password">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="input-group input-group-merge form-password-toggle">
                                                    <input
                                                        className="form-control form-control-merge"
                                                        id="login-password"
                                                        type="text"
                                                        name="password"
                                                        placeholder="············"
                                                        aria-describedby="login-password"
                                                        tabIndex={1}
                                                        required
                                                    />
                                                    <span className="input-group-text cursor-pointer">
                                                        <i data-feather="eye" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" /></g></svg>
                                                    </span>
                                                    <p className="m-0 error_text" style={{ color: "red" }}>
                                                        {validation}
                                                    </p>

                                                </div>
                                            </div>
                                            <button type='submit' className="btn btn-primary w-100" tabIndex={4}>
                                                Sign in
                                            </button>
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

export default Login