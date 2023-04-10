// import React from 'react';

// export const Login = () => {
//     return (
//         <div>
//             <h2>Hello from Login Component</h2>
//         </div>
//     )
// }
// export default Login;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/authActions';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <div class="login-container">
    <form class="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;