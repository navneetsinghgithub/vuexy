import React, { useEffect, useState } from 'react'
import { httpFile } from '../../../config/axiosConfig';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';

function Category() {
    const [dataa, setData] = useState()

    const getData = () => {
        try {
            httpFile.get("/findCategory").then((res) => {
                setData(res.data.body)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const deletehandler = (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await httpFile.delete(`/deleteCategory/${id}`).then((res) => {
                        getData()
                    })
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        } catch (error) {

        }
    }
    const columns = ["S.No.",
        "Name",
        "Image",
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
                        to={`/categoryview/${data._id}`}
                        className="btn  px-2 py-1  btn-outline-success">
                        <span dangerouslySetInnerHTML={{ __html: feather.icons.eye.toSvg() }}></span>
                        <i className="fas fa-eye"></i>
                    </Link>

                    <Link
                        to={`/categoryedit/${data._id}`}                       
                        className="btn  px-2 py-1  btn-outline-info">
                        <span dangerouslySetInnerHTML={{ __html: feather.icons.edit.toSvg() }}></span>                  
                        <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                        onClick={(e) => deletehandler(data?._id)}
                        className="btn  px-2 py-1  btn-outline-danger">
                        <span dangerouslySetInnerHTML={{ __html: feather.icons['trash-2'].toSvg() }}></span>
                        <i className="fas fa-trash"></i>
                    </Link>
                </div>
            );
            var dataArray = [];
            dataArray.push(index + 1);
            dataArray.push(data?.name);
            // dataArray.push(data?.lastName);
            dataArray.push(img);
            // dataArray.push(data?.countryCode.concat(-data?.phone));
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
                            <h1> Category</h1>
                            <Link
                                to={`/addcategory`}
                                className="btn btn-icon icon-left btn-primary shadow"
                            >
                                <i className="far fa-edit "></i> Add Category
                            </Link>
                        </div>

                        <MUIDataTable data={data} columns={columns} options={options} />
                    </section>
                </div>
            </div>

        </>
    )
}

export default Category
