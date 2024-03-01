import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { httpFile } from '../../../config/axiosConfig';

function AboutUs() {
  const Navigate = useNavigate();

  const [AboutUs, setAboutUs] = useState();
  const [validation, setValidation] = useState();
  const [updateValidation, setUpdateValidation] = useState();



  const getData = () => {
  httpFile
      .get(`http://localhost:1000/aboutUs`, {
        // headers: {
        //   Authorization: `Bearer ${adminInfo?.token}`,
        // },
      })
      .then((res) => {
        setAboutUs(res.data.body);
      })
      .catch((er) => {
        var error = er.response.data.message;
        if (error == "Please Login First") {
          localStorage.clear();
          Navigate("/");
        }
        console.log(er.message);
      });
  }

  useEffect(() => {
    getData()
  }, []);

  const contentChange = (e, editor) => {
    console.log(editor, "editor")
    setAboutUs({
      ...AboutUs,
      content: editor.getData(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (AboutUs == undefined || AboutUs?.title == "") {
      setValidation("This field is required");
      return Error;
    }
    if (AboutUs == undefined || AboutUs?.content == "") {
      setUpdateValidation("This field is required");
      return Error;
    }
   httpFile
      .put(`http://localhost:1000/updateAboutCms`, AboutUs, {
        //   headers: {
        //     Authorization: `Bearer ${adminInfo?.token}`,
        //   },`
      })
      .then((res) => {
        // toast.success("Terms & Condition Updated Successfully");
        window.location.reload();
      })
      .catch((err) => {
        var error = err.response.data.message;
        if (error == "Please Login First") {
          localStorage.clear();
          Navigate("/");
        }
        toast.error("About Us  Update Failed");
      });

  };

  const handleChange = (e) => {
    if (e.target.name == "title" || e.target.name == "content") {
      setValidation("");
      setUpdateValidation("");
    }
    setAboutUs({ ...AboutUs, [e.target.name]: e.target.value });
  };




  return (
    <>
      <div className="app-content content ">
        <div className="content-wrapper container-xxl p-0">
          <div className="content-body">
            <section className="section">
              <div
                className="section-header  rounded py-4 shadow"
                style={{ marginTop: "-48px", padding: "17px" }}
              >
                {" "}
                <h1 id="animated_box">About us</h1>
              </div>

              <div className="section-body ">
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow">

                        <div className="card-body">
                          <div className="form-group row mb-4">
                            <div className="col-11 ">
                              <label
                                className="col-form-label col- text-dark font-weight-bold  py-3"
                                style={{ float: "left" }}
                              >
                                Title
                              </label>
                              <input
                                id="title"
                                type="text"
                                className="form-control"
                                name="title"
                                value={AboutUs?.title}
                              />
                              <p className="m-0 error_text" style={{ color: "red" }}>
                                {validation}
                              </p>
                            </div>
                          </div>
                          <div className="App ">
                            <CKEditor
                              editor={ClassicEditor}
                              name="content"
                              data={AboutUs?.content}
                              onChange={contentChange}
                            />
                          </div>
                          <p className="m-0 error_text" style={{ color: "red" }}>
                            {updateValidation}
                          </p>
                          <div className="form-group row mb-4 py-4">
                            <div className="col-sm-12 col-md-7">
                              <button
                                id="updateContent"
                                className="btn btn-primary float-left"
                                type="submit"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div >
            </section>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutUs
