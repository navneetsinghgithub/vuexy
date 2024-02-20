import React, { useEffect, useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function TermsCondition() {
  const [terms, setTerms] = useState({
    title: '',
    content: '', 
  });

  const handleChange = (e) => {
    setTerms({
      ...terms,
      [e.target.name]: e.target.value,
    });
  };

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    setTerms({
      ...terms,
      content: data,
    });
  };

  const termshandlechange = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12"></div>
            </div>
          </div>
        </div>
        <div className="content-body">
          <div className="blog-edit-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <div className="author-info">
                        {/* <h6 className="mb-25">Chad Alexander</h6>
                        <p className="card-text">May 24, 2020</p> */}
                      </div>
                    </div>
                    <form onSubmit={termshandlechange} className="mt-2">
                      <div className="row">
                        <div className="col-md-6 col-12" style={{ width: "100%" }}>
                          <div className="mb-2">
                            <label className="form-label" htmlFor="blog-edit-title">
                              Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              value={terms.title}
                              id="blog-edit-title"
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-2">
                            <label className="form-label">Content</label>
                            <div id="blog-editor-wrapper">
                              <div id="blog-editor-container">
                                <div className="editor">
                                  <CKEditor
                                    editor={ClassicEditor}
                                    name="content"
                                    data={terms.content}
                                    onChange={handleCKEditorChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2"></div>
                        <div className="col-12 mt-50">
                          <button type="submit" className="btn btn-primary me-1">
                            Save Changes
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
    </div>
  );
}

export default TermsCondition;
