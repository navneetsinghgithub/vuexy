import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { httpFile } from '../../../config/axiosConfig';
import MUIDataTable from "mui-datatables"

function CusineTables() {
    const [dataa, setDataa] = useState([]);
    const adminInfo = JSON.parse(localStorage.getItem("token"));

    const Navigate = useNavigate();

    const getData = async (req, res) => {
        try {
            httpFile
                .get(`/findUser`)
                .then((res) => {
                    setDataa(res.data.body);
                    // setTotal(res.data.body.agent.length);
                })
                .catch((err) => {
                    var error = err.response.data.message;
                    if (error == "Please Login First") {
                        localStorage.clear();
                        Navigate("/");
                        // toast.error("Please Login First");
                    }
                    err.message;
                });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const handleChangeForStatusUpdate = (e, id) => {
        const value = dataa?.map((u) => {
            if (u._id === id) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Status Updated Succesfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return { ...u, status: e.target.checked ? 1 : 0 };
            }
            return u;
        });
        value && setDataa(value);
        if (data && value) {
            const user = value?.filter((u) => u._id === id)[0];
            httpFile
                .put(`/status/${id}`, user, {
                    headers: { Authorization: `Bearer ${adminInfo?.token}` },
                })
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


    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                httpFile
                    .delete(`/deleteUser/${id}`, {
                        headers: {
                            Authorization: `Bearer ${adminInfo?.token}`,
                        },
                    })
                    .then((res) => {
                        getData();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Deleted Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    })
                    .catch((er) =>
                        Swal.fire(er.message, "Something went Wrong", "error")
                    );
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    const columns = ["S.No.",
        "Name",
        " Email",
        "Phone",
        "Image",
        "Role",
        "status",
        "Action"];
    let finalArray = [];
    if (dataa && Array.isArray(dataa)) {

        for (let [index, data] of dataa?.entries()) {
            let img = (
                <img height={"50px"} width={"70px"}
                    className="img-fluid rounded mb-100"
                    src={
                        data?.image !== ""
                            ? `http://localhost:1000/images/userImage/${data?.image
                            }`
                            : ``
                    }
                    alt="avatar img"
                />
            );
            let action = (
                <div
                    className="d-flex justify-content-start align-items-center gap-2"
                    style={{
                        gap: "5px",
                        justifyContent: "center",
                    }}
                >
                    <Link
                        to={`/View/${data._id}`}
                        className="btn  px-2 py-1  btn-outline-success">
                        <span dangerouslySetInnerHTML={{ __html: feather.icons.eye.toSvg() }}></span>
                        <i className="fas fa-eye"></i>
                    </Link>

                    {/* <Link
                        to={`/CuisineUpdate/${data._id}`}
                        className="btn  px-2 py-1  btn-outline-info"
                    >
                        <i className="fas fa-pen"></i>
                    </Link> */}
                    <Link
                        onClick={(e) => deleteHandler(data?._id)}
                        className="btn  px-2 py-1  btn-outline-danger">
                        <span dangerouslySetInnerHTML={{ __html: feather.icons['trash-2'].toSvg() }}></span>
                        <i className="fas fa-trash"></i>
                    </Link>
                </div>
            )
            let statusButton = (
                <div class="d-flex flex-column">
                    {/* <label class="form-check-label mb-50" for="customSwitch4">
                        Success
                      </label> */}
                    <div class="form-check form-check-success form-switch">
                        <input
                            type="checkbox"
                            checked={data?.status}
                            class="form-check-input"
                            id="customSwitch4"
                            onChange={(e) => handleChangeForStatusUpdate(e, data?._id)}
                        />
                    </div>
                </div>
            );

            var dataArray = [];

            dataArray.push(index + 1);
            dataArray.push(data?.name);
            // dataArray.push(data?.lastName);
            dataArray.push(data?.email);
            dataArray.push(data?.phone);
            dataArray.push(img);
            dataArray.push(data?.role)

            // dataArray.push(data?.countryCode.concat(-data?.phone));
            dataArray.push(statusButton);
            dataArray.push(action);
            finalArray.push(dataArray);
        }
    }

    const data = finalArray;
    const options = {
        filterType: "checkbox",
        selectableRows: "none",
        filter: "false",
        download: false,
        print: false,
        viewColumns: false,

    };
    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                    </div>
                    <div className="content-body"></div>
                    <section className="section">
                        <div
                            className="section-header  rounded py-4 shadow"
                            style={{
                                marginTop: "-48px",
                                padding: "17px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <h1> User Listing</h1>
                            <Link
                                to={`/CuisineCreate`}
                                className="btn btn-icon icon-left btn-primary shadow"
                            >
                                <i className="far fa-edit "></i>Add Cuisine
                            </Link>
                        </div>

                        <MUIDataTable data={data} columns={columns} options={options} />
                    </section>
                </div>
            </div>
        </>
    )
}

export default CusineTables
