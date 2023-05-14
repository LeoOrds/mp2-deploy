import "./Login.css"
function Login () {
    return (
        <>
          <div className="container-fluid cont_login">
      <div className="row">
        <div className="col-md-12">
          <a href="index.html"><img src="/images/logo-removebg.png" alt="" className="logo" /></a>
        </div>
      </div>
      <div className="row container_login">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <div className="box_login">
        <h1 className="title_login">LOGIN</h1>
        <input type="email" placeholder="Enter Email Address" className="container_email" />
        <input type="password" placeholder="Enter Password" className="container_pass" />
        <label className="remember_me"><input type="checkbox"/> Remember me</label><br/>
        <button className="button_signin">Sign in</button>
      </div>
      </div>
        <div className="cold-md-3"></div>
      </div>
    </div>
        </>
    )
}
export default Login