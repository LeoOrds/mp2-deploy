import "./Signup.css"
function Signup () {
    return ( <>
     <div className="container-fluid cont_login">
        <div className="row">
            <div className="col-md-12">
            <a href="index.html"><img src="/images/logo-removebg.png" alt="" className="logo" /></a>
            </div>
         </div>
        <div className="row container_login">
            <div className="col-md-2"></div>
                <div className="col-md-8">
      <div className="box_login">
      <h1 className="title_login">Sign Up! It's free and always will be.</h1>
      <input type="text" placeholder="First Name" className="container_firstname"/>
      <input type="text" placeholder="Last Name" className="container_lastname"/>
      <input type="email" placeholder="Email Address" className="container_emailadd"/>
      <input type="number" placeholder="Mobile Number" className="container_mobile"/>
      <input type="text" className="container_birthday" placeholder="Birthday"/>
      <input type="text" placeholder="Address" className="container_address"/>
      <input type="password" placeholder="Password" className="container_password"/>
      <input type="password" placeholder="Confirm Password" className="container_confirmpass"/>
      <p className="privacy_desc">
        The information you will be providing is governed by our Privacy Policy, which was developed to allow us to better manage your personal information and ensure that your privacy is protected. Aligned with the implementing rules and regulations of Republic Act No. 10173 or the Data Privacy Act of 2012, our policy describes how we at Bautista Maternal Clinic can collect, use, disclose, store, secure and dispose of your Personal Information.
      </p>
      <label className="privacy_notice"><input type="checkbox" /> I Agree to the Privacy Notice.</label><br/>
      <button className="button_signin">Sign up</button>
    </div>
    </div>
      <div className="cold-md-2"></div>
    </div>
  </div>
    </>

    )
}
export default Signup