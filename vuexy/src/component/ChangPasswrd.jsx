import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { httpFile } from '../../config/axiosConfig';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'react-feather';

function ChangPasswrd() {
    const [eye, setEye] = useState(false);
    const [eye2, setEye2] = useState(false);
    const [eye3, setEye3] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState();
    const [passwordError, setPasswordError] = useState("");
    const [newpasswordError, setNewpasswordError] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");

    const adminInfo = JSON.parse(localStorage.getItem("token"))

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validateInput = () => {
        let valid = true;
        if (!data.password) {
            setPasswordError("Old Password is required");
            valid = false;
        }
        if (!data.newPassword) {
            setNewpasswordError("New Password is required");
            valid = false;
        }
        if (!data.confirmPassword) {
            setConfirmpasswordError("Confirm Password is required");
            valid = false;
        }
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateInput()) {
            try {
                httpFile.put(`/changePassword/${adminInfo?._id}`,
                    data,
                    {
                        headers: {
                            authorization: `Bearer ${adminInfo?.token}`,
                        },
                    }
                ).then((res) => {
                    setData(res.data.body);
                    if (res.data.success === true) {
                        navigate("/");
                    }
                }).catch((err) => {
                    console.log(err, "err");
                })
                if (res.data.body) {
                    navigate("/dash");
                }
            } catch (error) {
                let message = error.message;
                toast.error(message);
            }
        }
    };

    const handleEye = () => {
        setEye(!eye);
    };
    const handleEye2 = () => {
        setEye2(!eye2);
    };
    const handleEye3 = () => {
        setEye3(!eye3);
    };
    const handleback = () => {
        navigate("/dash");
    };
    return (
        <>
            <div className="app-content content">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0">
                    <h2 className=" content-header-title mb-2 mt-5 text-center">Change Password</h2>
                    <div className="content-body">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <form className="validate-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="account--password">
                                                    <b>Password</b>
                                                </label>
                                                <div className="input-group form-password-toggle input-group-merge">
                                                    <input
                                                        type={eye ? "text" : "password"}
                                                        className={`form-control ${passwordError && "is-invalid"}`}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        tabIndex={1}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div className="input-group-text cursor-pointer" onClick={handleEye}>
                                                        {eye ? <EyeOff /> : <Eye />}
                                                    </div>
                                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="account-new-password">
                                                    <b>New Password</b>
                                                </label>
                                                <div className="input-group form-password-toggle input-group-merge">
                                                    <input
                                                        type={eye2 ? "text" : "password"}
                                                        id="newPassword"
                                                        name="newPassword"
                                                        className={`form-control ${newpasswordError && "is-invalid"}`}
                                                        placeholder="New Password"
                                                        tabIndex={2}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div className="input-group-text cursor-pointer" onClick={handleEye2}>
                                                        {eye2 ? <EyeOff /> : <Eye />}
                                                    </div>
                                                    {newpasswordError && <div className="invalid-feedback">{newpasswordError}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="account-retype-new-password">
                                                    <b>Retype New Password</b>
                                                </label>
                                                <div className="input-group form-password-toggle input-group-merge">
                                                    <input
                                                        type={eye3 ? "text" : "password"}
                                                        className={`form-control ${confirmpasswordError && "is-invalid"}`}
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        placeholder="Retype New Password"
                                                        tabIndex={3}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div className="input-group-text cursor-pointer" onClick={handleEye3}>
                                                        {eye3 ? <EyeOff /> : <Eye />}
                                                    </div>
                                                    {confirmpasswordError && <div className="invalid-feedback">{confirmpasswordError}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary me-1 mt-1" tabIndex={4}>
                                                Save changes
                                            </button>
                                            <button onClick={handleback} className="btn btn-primary me-1 mt-1">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangPasswrd
