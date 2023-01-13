import React from 'react'

const Loginform = () => {
  return (
    <div className='container'>
      <h2 className='Form-1'>LOGIN</h2>
      <div className='Form-1'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email Address*</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email Address' title='Please Enter Valid Email Address' required/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' title='Please fill out this field' required/>
            <a href="">Forgot Password?</a>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
          </div>
          <button type="submit" className="btn btn-success">LOGIN</button> <br />
          <a href="">New Customer? Register Here!</a>
        </form>
      </div>
    </div>
  )
}

export default Loginform
