import "./Reqapp.css"
function Reqapp() {
    return ( <>
    <div class="row body_one">
    <div class="col-md-6">
    <h1 class="body_title">Start your appointment request here.</h1>
    <h2 class="body_subtitle">This is the easiest way to reach. us</h2>
    </div>
    <div class="col-md-6">
    <a href="./Signup" class="body_newpatient">New Patients</a>
    <p class="body_newdesc">Provide your info and set a call time.</p>
    <a href="./Login" class="body_returningpatient">Returning Patients</a>
    <p class="body_returningdesc">Login to set an appointment.</p>
    </div>
    </div>
    <div class="row body_two">
    <div class="col-md-6">
    <h1 class="bodytwo_title">Still want to schedule by phone?</h1>
    </div>
    <div class="col-md-6">
    <p class="bodytwo_desc">Call during local business hours to speak with an appointment coordinator. Because hold times vary, you can also use our online request above to use when to call you. If this is an emergency, call your local emergency services.
    <h1 class="bodytwo_info">Alcala - Bayambang Road, Bautista, Philippines</h1>
    <p class="bodytwo_info">0936-544-9982</p>
    <p class="bodytwo_info">8 a.m to 5 p.m</p>
    <p class="bodytwo_info">Monday through Friday</p>
    </p>
    </div>
    </div>
</>
    )
}

export default Reqapp


