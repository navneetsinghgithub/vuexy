import React from 'react'

function User() {
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
                                        <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                                        </tr>
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













