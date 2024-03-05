import React from 'react'

function Edit() {
    return (
        <>
            <div className="app-content content "  >
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" style={{ width: "100%", }}>
                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        role="tabpanel"
                                        className="tab-pane active"
                                        id="account-vertical-general"
                                        aria-labelledby="account-pill-general"
                                        aria-expanded="true"
                                    >
                               
                                        <form className="validate-form mt-2">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="name">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"                                                        
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                         
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="email">
                                                            E-mail
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                          
                                                            id="email"
                                                            name="email"                                                                                          
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-1">
                                                        <label className="form-label" htmlFor="phone">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"                                                      
                                                            id="phone"
                                                            name="phone"
                                                         
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-75">
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary mt-2 me-1">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
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

export default Edit
