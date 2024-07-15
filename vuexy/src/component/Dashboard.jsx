import React from 'react'

function Dashboard() {
    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row"></div>
                    <div className="content-body">
                        <section id="dashboard-ecommerce">
                            <div className="row match-height">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card card-congratulation-medal">
                                        <div className="card-body">
                                            <h5>Congratulations 🎉 John!</h5>
                                            <p className="card-text font-small-3">
                                                You have won gold medal
                                            </p>
                                            <h3 className="mb-75 mt-2 pt-50">
                                                <a href="#">$48.9k</a>
                                            </h3>
                                            <button type="button" className="btn btn-primary">
                                                View Sales
                                            </button>
                                            <img
                                                src="../../../app-assets/images/illustration/badge.svg"
                                                className="congratulation-medal"
                                                alt="Medal Pic"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-md-6 col-12">
                                    <div className="card card-statistics">
                                        <div className="card-header">
                                            <h4 className="card-title">Statistics</h4>
                                            <div className="d-flex align-items-center">
                                                <p className="card-text font-small-2 me-25 mb-0">
                                                    Updated 1 month ago
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-body statistics-body">
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                                                    <div className="d-flex flex-row">
                                                        <div className="avatar bg-light-primary me-2">
                                                            <div className="avatar-content">
                                                                <i
                                                                    data-feather="trending-up"
                                                                    className="avatar-icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h4 className="fw-bolder mb-0">230k</h4>
                                                            <p className="card-text font-small-3 mb-0">Sales</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                                                    <div className="d-flex flex-row">
                                                        <div className="avatar bg-light-info me-2">
                                                            <div className="avatar-content">
                                                                <i data-feather="user" className="avatar-icon" />
                                                            </div>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h4 className="fw-bolder mb-0">8.549k</h4>
                                                            <p className="card-text font-small-3 mb-0">Customers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                                                    <div className="d-flex flex-row">
                                                        <div className="avatar bg-light-danger me-2">
                                                            <div className="avatar-content">
                                                                <i data-feather="box" className="avatar-icon" />
                                                            </div>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h4 className="fw-bolder mb-0">1.423k</h4>
                                                            <p className="card-text font-small-3 mb-0">Products</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 col-12">
                                                    <div className="d-flex flex-row">
                                                        <div className="avatar bg-light-success me-2">
                                                            <div className="avatar-content">
                                                                <i
                                                                    data-feather="dollar-sign"
                                                                    className="avatar-icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h4 className="fw-bolder mb-0">$9745</h4>
                                                            <p className="card-text font-small-3 mb-0">Revenue</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard