import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { httpFile } from "../../../config/axiosConfig";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";


function CuisineTable() {
    const [dataa, setDataa] = useState([]);
    const adminInfo = JSON.parse(localStorage.getItem("token"));
    console.log(adminInfo, "adminInfo")

    const Navigate = useNavigate();


    const getData = async (req, res) => {
        try {
            httpFile
                .get(`/findUser`)
                .then((res) => {
                    console.log(res, "ressssssssssssssss");
                    setDataa(res.data.body);
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

    const columns = ["S.No.", " Cuisine", "Action"];
    let finalArray = [];

    for (let [index, data] of dataa?.entries()) {
        let action = (
            <div
                className="d-flex justify-content-start align-items-center gap-2"
                style={{
                    gap: "5px",
                    justifyContent: "center",
                }}
            >
                <Link
                    to={`/CuisineView/${data._id}`}
                    className="btn  px-2 py-1  btn-outline-success"
                >
                    <i className="fas fa-eye"></i>
                </Link>

                <Link
                    to={`/CuisineUpdate/${data._id}`}
                    className="btn  px-2 py-1  btn-outline-info"
                >
                    <i className="fas fa-pen"></i>
                </Link>
                <Link
                    onClick={(e) => deleteHandler(data._id)}
                    className="btn  px-2 py-1  btn-outline-danger"
                >
                    <i className="fas fa-trash"></i>
                </Link>
            </div>
        );
        var dataArray = [];

        dataArray.push(index + 1);
        dataArray.push(data?.name);

        dataArray.push(action);

        finalArray.push(dataArray);
    }

    const data = finalArray;
    const options = {
        filterType: "checkbox",
        selectableRows: "none",
        filter: "false",
        download: false,
        print: false,
        // pagination: "Top",

        viewColumns: false,
    };

    return (
        <>
            <section className="section">
            <div className="app-content content ">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                <div
                    className="section-header  rounded py-4 shadow"
                    style={{
                        marginTop: "-48px",
                        padding: "17px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <h1> Cuisine Listing</h1>
                    <Link
                        to={`/CuisineCreate`}
                        className="btn btn-icon icon-left btn-primary shadow"
                    >
                        <i className="far fa-edit "></i>Add Cuisine
                    </Link>
                </div>

                <MUIDataTable data={data} columns={columns} options={options} />
                </div>

                </div>

                </div>

            </section>
        </>
    );
}

export default CuisineTable;