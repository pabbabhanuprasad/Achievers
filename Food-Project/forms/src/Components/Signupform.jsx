import React from 'react'

const Signupform = () => {
  return (
    <div className='container'>
      <h2 className='Form-1'>REGISTER</h2>
      <div className='Form-1'>
        <form>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name*</label>
            <input type="text" className="form-control" id="fullname" placeholder='Full Name' title='Full Name' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number*</label>
            <input type="tel" className="form-control" id="mobile" placeholder='Mobile Number' title='Please Enter Valid Mobile Number' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email Address*</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email Address' title='Please Enter Valid Email Address' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' title='Please fill out this field' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">Confirm Password*</label>
            <input type="password" className="form-control" id="confirmpassword" placeholder='Confirm Password' title='Please fill out this field' required/>
          </div>


          <div className="mb-3">
            <label htmlFor="state" className="form-label">State*</label>
            <input type="text" className="form-control" id="state" title='State' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="doorno" className="form-label">Building/Plot No/Door No*</label>
            <input type="text" className="form-control" id="doorno" title='Door No' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label">Area/Street</label>
            <input type="text" className="form-control" id="street" title='Area/Street'/>
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City/Town*</label>
            <input type="text" className="form-control" id="city" placeholder='City' title='City' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">Pin/Zip Code*</label>
            <input type="text" className="form-control" id="pincode" placeholder='Pin/Zip Code' title='Pincode' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="landmark" className="form-label">Landmark</label>
            <input type="text" className="form-control" id="landmark" placeholder='Landmark' title='Landmark'/>
          </div>
          
          <button type="button" className="btn btn-success">REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default Signupform
