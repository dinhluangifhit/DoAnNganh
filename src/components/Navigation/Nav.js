import React from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';


const Nav = (post) => { 
    return (
        <div className='home-container'>
              {/* <div itemID="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary"  ></div>
                </div> */}

                {/* Topbar Start */}
            <div className="container-fluid py-2 d-none d-lg-flex">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small className="me-3"><i class="fa fa-map-marker-alt me-2"></i>Phòng 27A02 - Tầng 27 - Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Q.1, TP.HỒ CHÍ MINH</small>
                            <small className="me-3"><i class="fa fa-clock me-2"></i>Mon-Sat 09am-5pm, Sun Closed</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/*  Brand Start  */}
            <div className="container-fluid-booter bg-primary text-white pt-2 pb-5 d-none d-lg-flex   ">
                <div className="container pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <i className="bi bi-telephone-inbound fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Điện Thoại</h5>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                        <a href="index.html" className="h1 text-white mb-0">Sky<span className="text-dark">Building</span></a>
                        <div className="d-flex">
                            <i className="bi bi-envelope fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Email</h5>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand End  */}

            {/* <!-- Navbar Start --> */}
            <div className="container-fluid sticky-top">
                <div class="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
                        <a href="index.html" className="navbar-brand d-lg-none">
                            <h1 className="text-primary m-0">Sky<span className="text-dark">Building</span></h1>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" itemID="navbarCollapse">
                            <div className="navbar-nav topnav ">
                                <NavLink to="/Home" exact className="nav-item nav-link active">Trang chủ</NavLink>
                                
                                <div className="nav-item dropdown">
                                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Giới thiệu</NavLink>
                                    <div className="dropdown-menu bg-green m-0">
                                        <NavLink to="feature.html" className="dropdown-item">Chứng chỉ</NavLink>
                                        <NavLink to="team.html" className="dropdown-item">Chính sách bảo mật</NavLink>
                                        <NavLink to="testimonial.html" className="dropdown-item">Nội quy Website</NavLink>
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Danh sách tòa nhà</NavLink>
                                    <div className="dropdown-menu bg-green m-0">
                                        <NavLink to="feature.html" className="dropdown-item">The Minato Residenci</NavLink>
                                        <NavLink to="team.html" className="dropdown-item">Hoàng Huy Commerci</NavLink>
                                        <NavLink to="testimonial.html" className="dropdown-item">Chung cư Sentosa</NavLink>
                                        <NavLink to="appoinment.html" className="dropdown-item">Chung cư Hilton</NavLink>
                                        <NavLink to="404.html" className="dropdown-item">Chung cư HEZA</NavLink>
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nội quy chung cư</NavLink>
                                    <div className="dropdown-menu bg-green m-0">
                                        <NavLink to="feature.html" className="dropdown-item">Features</NavLink>
                                        <NavLink to="team.html" className="dropdown-item">Our Team</NavLink>
                                        <NavLink to="testimonial.html" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="appoinment.html" className="dropdown-item">Appoinment</NavLink>
                                        <NavLink to="404.html" className="dropdown-item">404 Page</NavLink>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tin tức</NavLink>
                                    <div className="dropdown-menu bg-green m-0">
                                        <NavLink to="feature.html" className="dropdown-item">Tin nội bộ</NavLink>
                                        <NavLink to="team.html" className="dropdown-item">Tin truyền thông</NavLink>
                                        <NavLink to="testimonial.html" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="appoinment.html" className="dropdown-item">Appoinment</NavLink>
                                        <NavLink to="404.html" className="dropdown-item">404 Page</NavLink>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Tuyển dụng</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            

            
        </div>
           
            
    );
   
}

export default Nav;