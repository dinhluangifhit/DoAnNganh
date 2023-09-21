import './Login.scss';
const Login = (post) =>{
    return (
        <div className="login-container mt-3">
            <div className="container">
                <div className="row px-3 px-ms-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Sky Building
                        </div>
                        <div className='detail'>
                            Sky Building luôn luôn đồng hành cùng bạn.
                        </div>
                    </div>
                    
                    <div className="content-right  col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                    <div className='brand d-sm-none'>
                            Sky Building
                        </div>
                        <input type="text" className='form-control' placeholder='Email hoặc số điện thoại di động'/>
                        <input type="password" className='form-control' placeholder='Password'/>
                        <button className='btn btn-success'>Đăng Nhập</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Quên mật khẩu ?</a>
                        </span>
                        <hr/>
                        <span className='text-center'>
                            <a className='forgot-password' href='/'>Trở về trang chủ.</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;