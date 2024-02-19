import React from 'react'

function Login() {
    return (
        <>
            <div className="app-content content ">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />
                <div className="content-wrapper">
                    <div className="content-header row"></div>
                    <div className="content-body">
                        <div className="auth-wrapper auth-v2">
                            <div className="auth-inner row m-0">
                                {/* Brand logo*/}
                                {/* <a className="brand-logo" href="#">
                    <svg
                        viewBox="0 0 139 95"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        height={28}
                    >
                        <defs>
                            <linearGradient
                                id="linearGradient-1"
                                x1="100%"
                                y1="10.5120544%"
                                x2="50%"
                                y2="89.4879456%"
                            >
                                <stop stopColor="#000000" offset="0%" />
                                <stop stopColor="#FFFFFF" offset="100%" />
                            </linearGradient>
                            <linearGradient
                                id="linearGradient-2"
                                x1="64.0437835%"
                                y1="46.3276743%"
                                x2="37.373316%"
                                y2="100%"
                            >
                                <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                                <stop stopColor="#FFFFFF" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                                id="Artboard"
                                transform="translate(-400.000000, -178.000000)"
                            >
                                <g id="Group" transform="translate(400.000000, 178.000000)">
                                    <path
                                        className="text-primary"
                                        id="Path"
                                        d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                        style={{ fill: "currentColor" }}
                                    />
                                    <path
                                        id="Path1"
                                        d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                                        fill="url(#linearGradient-1)"
                                        opacity="0.2"
                                    />
                                    <polygon
                                        id="Path-2"
                                        fill="#000000"
                                        opacity="0.049999997"
                                        points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                                    />
                                    <polygon
                                        id="Path-21"
                                        fill="#000000"
                                        opacity="0.099999994"
                                        points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                                    />
                                    <polygon
                                        id="Path-3"
                                        fill="url(#linearGradient-2)"
                                        opacity="0.099999994"
                                        points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                </a> */}
                                {/* /Brand logo*/}
                                {/* Left Text*/}
                                {/* <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
                    <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                        <img
                            className="img-fluid"
                            src="../../../app-assets/images/pages/login-v2.svg"
                            alt="Login V2"
                        />
                    </div>
                </div> */}
                                {/* /Left Text*/}
                                {/* Login*/}
                                <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                        <h2 className="card-title fw-bold mb-1">Welcome to Vuexy! 👋</h2>
                                        <p className="card-text mb-2">
                                            Please sign-in to your account and start the adventure
                                        </p>
                                        <form
                                            className="auth-login-form mt-2"
                                            action="index.html"
                                            method="POST"
                                        >
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="login-email">
                                                    Email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="login-email"
                                                    type="text"
                                                    name="login-email"
                                                    placeholder="john@example.com"
                                                    aria-describedby="login-email"
                                                    autofocus=""
                                                    tabIndex={1}
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <div className="d-flex justify-content-between">
                                                    <label className="form-label" htmlFor="login-password">
                                                        Password
                                                    </label>
                                                    <a href="page-auth-forgot-password-v2.html">
                                                        <small>Forgot Password?</small>
                                                    </a>
                                                </div>
                                                <div className="input-group input-group-merge form-password-toggle">
                                                    <input
                                                        className="form-control form-control-merge"
                                                        id="login-password"
                                                        type="password"
                                                        name="login-password"
                                                        placeholder="············"
                                                        aria-describedby="login-password"
                                                        tabIndex={1}
                                                    />
                                                    <span className="input-group-text cursor-pointer">
                                                        <i data-feather="eye" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" /></g></svg>
                                                    </span>

                                                </div>
                                            </div>
                                            <div className="mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        id="remember-me"
                                                        type="checkbox"
                                                        tabIndex={3}
                                                    />
                                                    <label className="form-check-label" htmlFor="remember-me">
                                                        {" "}
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary w-100" tabIndex={4}>
                                                Sign in
                                            </button>
                                        </form>
                                        {/* <p className="text-center mt-2">
                            <span>New on our platform?</span>
                            <a href="page-auth-register-v2.html">
                                <span>&nbsp;Create an account</span>
                            </a>
                        </p> */}
                                        {/* <div className="divider my-2">
                            <div className="divider-text">or</div>
                        </div> */}
                                        {/* <div className="auth-footer-btn d-flex justify-content-center">
                            <a className="btn btn-facebook" href="#">
                                <i data-feather="facebook" />
                            </a>
                            <a className="btn btn-twitter white" href="#">
                                <i data-feather="twitter" />
                            </a>
                            <a className="btn btn-google" href="#">
                                <i data-feather="mail" />
                            </a>
                            <a className="btn btn-github" href="#">
                                <i data-feather="github" />
                            </a>
                        </div> */}
                                    </div>
                                </div>
                                {/* /Login*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login