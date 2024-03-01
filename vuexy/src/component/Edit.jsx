import React from 'react'

function Edit() {
    return (
        <>
            <section id="basic-horizontal-layouts">
                <div className="row"></div>
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Horizontal Form with Icons</h4>
                        </div>
                        <div className="card-body">
                            <form className="form form-horizontal">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-1 row">
                                            <div className="col-sm-3">
                                                <label className="col-form-label" htmlFor="fname-icon">
                                                    First Name
                                                </label>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-merge">
                                                    <span className="input-group-text">
                                                        <i data-feather="user" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="fname-icon"
                                                        className="form-control"
                                                        name="fname-icon"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-1 row">
                                            <div className="col-sm-3">
                                                <label className="col-form-label" htmlFor="email-icon">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-merge">
                                                    <span className="input-group-text">
                                                        <i data-feather="mail" />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        id="email-icon"
                                                        className="form-control"
                                                        name="email-id-icon"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-1 row">
                                            <div className="col-sm-3">
                                                <label className="col-form-label" htmlFor="contact-icon">
                                                    Mobile
                                                </label>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-merge">
                                                    <span className="input-group-text">
                                                        <i data-feather="smartphone" />
                                                    </span>
                                                    <input
                                                        type="number"
                                                        id="contact-icon"
                                                        className="form-control"
                                                        name="contact-icon"
                                                        placeholder="Mobile"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-1 row">
                                            <div className="col-sm-3">
                                                <label className="col-form-label" htmlFor="pass-icon">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-merge">
                                                    <span className="input-group-text">
                                                        <i data-feather="lock" />
                                                    </span>
                                                    <input
                                                        type="password"
                                                        id="pass-icon"
                                                        className="form-control"
                                                        name="contact-icon"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 offset-sm-3">
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customCheck2"
                                                />
                                                <label className="form-check-label" htmlFor="customCheck2">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 offset-sm-3">
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

            </section>

        </>
    )
}

export default Edit
