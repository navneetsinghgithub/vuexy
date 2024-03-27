import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpFile } from '../../config/axiosConfig'
import { toast } from 'react-toastify'
import { Eye, EyeOff } from "react-feather"
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const adminInfo = JSON.parse(localStorage.getItem("token") ? true : false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState()
    const [eye, SetEye] = useState(false)
    const navigate = useNavigate()

    // const handlechange = (e) => {
    //     if (e.target.name == "email") {
    //         setValidation("");
    //     }
    //     setdata({ ...data, [e.target.name]: e.target.value })
    // }

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
            httpFile.post("/login", { email, password }).then((res) => {
                if (res.data.body.role == 0) {
                    if (res.data.status != 400) {
                        setEmail(res.data.body)
                        localStorage.setItem("token", JSON.stringify(res.data.body))
                        navigate("/dash")
                        toast.success("Succesfully logged in");
                        setTimeout(() => {
                            setInterval()
                        }, 2000)

                    }
                }
                else {
                    toast.error("Email Or Password Not Correct")
                }
            }).catch((error) => {
                console.log(error, "error");
            })
        } catch (error) {
            console.log(error, "error");
        }

    }
    const handleEye = () => {
        SetEye(!eye)
    }



    return (
        <>
            <div style={{backgroundImage:'url("https://images.pexels.com/photos/7130464/pexels-photo-7130464.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize:"100% 100%", height:"100vh"}}>
                <div className="app-content log_in_bg content p-0 m-0">
                    <div className="content-wrapper container-fluid">
                        <div className="content-body">
                            <div className="row justify-content-center align-items-start py-5">                       
                                <div className="col-lg-4 col-md-6">
                                    <div clobjectassName="auth-wrapper auth-v1 px-2">

                                        <div className="auth-inner py-2">
                                            <div className="card mb-0">
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        {/* <img
                                                            src=""
                                                            alt="logo"
                                                            className="mb-5 mt-2"
                                                            style={{ width: "125px", height: "125px" }}
                                                        /> */}
                                                    </div>

                                                    <h4 className="card-title mb-1">Welcome to Your App! 👋</h4>
                                                    <p className="card-text mb-2">Please sign in to your account to continue.</p>
                                                    <form className="auth-login-form mt-2" onSubmit={getdata}>
                                                        <div className="mb-1">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                name="email"
                                                                placeholder="john@example.com"
                                                                aria-describedby="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-1">
                                                            <label htmlFor="password" className="form-label">Password</label>
                                                            <div className="password_group position-relative">
                                                                <input
                                                                    type={eye ? "text" : "password"}
                                                                    className="form-control"
                                                                    id="password"
                                                                    name="password"
                                                                    placeholder="******"
                                                                    aria-describedby="password"
                                                                    value={password}
                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                    required
                                                                />
                                                                <div className="eye_ico position-absolute" style={{ top: "7px", right: "9px" }} 
                                                                onClick={handleEye}>{eye ? <Eye/> : <EyeOff/>}</div>
                                                            </div>
                                                        </div>
                                                        {/* {error && <div className="text-danger mb-1">{error}</div>} */}
                                                        <div className="mb-1">
                                                            <button type="submit" className="btn btn-primary w-100">Sign in</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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