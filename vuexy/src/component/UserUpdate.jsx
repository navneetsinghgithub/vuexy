import React from 'react'

function UserUpdate() {
  return (
    <>
    <div className="col-md-6 col-12">
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Update User</h4>
            </div>
            <div className="card-body">
                <form className="form form-vertical">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="first-name-icon">
                                    First Name
                                </label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text">
                                        <i data-feather="user" />
                                    </span>
                                    <input
                                        type="text"
                                        id="first-name-icon"
                                        className="form-control"
                                        name="fname-icon"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="email-id-icon">
                                    Email
                                </label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text">
                                        <i data-feather="mail" />
                                    </span>
                                    <input
                                        type="email"
                                        id="email-id-icon"
                                        className="form-control"
                                        name="email-id-icon"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="contact-info-icon">
                                    Mobile
                                </label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text">
                                        <i data-feather="smartphone" />
                                    </span>
                                    <input
                                        type="number"
                                        id="contact-info-icon"
                                        className="form-control"
                                        name="contact-icon"
                                        placeholder="Mobile"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="password-icon">
                                    Password
                                </label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text">
                                        <i data-feather="lock" />
                                    </span>
                                    <input
                                        type="password"
                                        id="password-icon"
                                        className="form-control"
                                        name="contact-icon"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-1">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customCheck4"
                                    />
                                    <label className="form-check-label" htmlFor="customCheck4">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="reset" className="btn btn-primary me-1">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-outline-secondary">
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default UserUpdate