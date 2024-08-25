
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Signup = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    area: '',
    zipCode: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Register the user
      const registerResponse = await fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (registerResponse.ok) {
        console.log('Registration successful:', registerResponse);
        
        // Attempt to log the user in after registration
        const loginResponse = await fetch('http://localhost:8080/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          // Save the token (you might want to use localStorage or cookies)
          localStorage.setItem('authToken', loginData.token);
          localStorage.setItem('userId', loginData.user.id);

          // Update authentication status
          onRegister(true);

          // Redirect to the sell property interface
          navigate('/sell-property');
        } else {
          const loginErrorData = await loginResponse.json();
          setError('Error in login: ' + loginErrorData.message);
        }
      } else {
        const registerErrorData = await registerResponse.json();
        console.error('Error in registration:', registerErrorData);
        setError('Error in registration: ' + registerErrorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className="container signup-container">
        <div className="container w-25 rounded-5 p-2">
          <h1 className="text-center mt-3">Register</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control mt-3"
                id="firstName"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
                id="phoneNumber"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control"
                id="country"
                placeholder="Enter country"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control"
                id="state"
                placeholder="Enter state"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                id="city"
                placeholder="Enter city"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="form-control"
                id="area"
                placeholder="Enter area"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="form-control"
                id="zipCode"
                placeholder="Enter zip code"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            {error && (
              <div className="form-group">
                <div className="alert alert-danger">{error}</div>
              </div>
            )}
            <br />
            <button type="submit" className="btn btn-primary mt-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Layout from '../Layout/Layout';

// const Signup = ({ onRegister }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//     country: '',
//     state: '',
//     city: '',
//     area: '',
//     zipCode: '',
//   });

//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Register the user
//       const registerResponse = await fetch('http://localhost:8080/api/v1/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (registerResponse.ok) {
//         console.log('Registration successful:', registerResponse);

//         // Send OTP
//         const otpResponse = await fetch('http://localhost:8080/api/v1/otp/send', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ contact: formData.phoneNumber || formData.email }),
//         });

//         if (otpResponse.ok) {
//           setIsOtpSent(true);
//         } else {
//           const errorData = await otpResponse.json();
//           console.error('Error sending OTP:', errorData);
//           setError('Error sending OTP: ' + errorData.message);
//         }
//       } else {
//         const errorData = await registerResponse.json();
//         console.error('Error in registration:', errorData);
//         setError('Error in registration: ' + errorData.message);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//       setError('Network error. Please try again later.');
//     }
//   };

//   const handleOtpVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/v1/otp/verify', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ otp, contact: formData.phoneNumber || formData.email }),
//       });

//       if (response.ok) {
//         setOtpVerified(true);
//         onRegister(true); // Update authentication status

//         // Attempt to log the user in after OTP verification
//         const loginResponse = await fetch('http://localhost:8080/api/v1/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//           }),
//         });

//         if (loginResponse.ok) {
//           const loginData = await loginResponse.json();
//           // Save the token and user ID (you might want to use localStorage or cookies)
//           localStorage.setItem('authToken', loginData.token);
//           localStorage.setItem('userId', loginData.user.id);

//           // Redirect to the sell property interface
//           navigate('/sell-property');
//         } else {
//           const loginErrorData = await loginResponse.json();
//           setError('Error in login: ' + loginErrorData.message);
//         }
//       } else {
//         const errorData = await response.json();
//         console.error('Error verifying OTP:', errorData);
//         setError('Error verifying OTP: ' + errorData.message);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//       setError('Network error. Please try again later.');
//     }
//   };

//   return (
//     <Layout>
//       <div className="container signup-container">
//         <div className="container w-25 rounded-5 p-2">
//           <h1 className="text-center mt-3">Register</h1>
//           {!isOtpSent || !otpVerified ? (
//             <form onSubmit={handleSubmit} className="signup-form">
//               {/* Form fields */}
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="form-control mt-3"
//                   id="firstName"
//                   placeholder="Enter first name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="lastName"
//                   placeholder="Enter last name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter email"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phoneNumber">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="phoneNumber"
//                   placeholder="Enter phone number"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="country">Country</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="country"
//                   placeholder="Enter country"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="state">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="state"
//                   placeholder="Enter state"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="city">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="city"
//                   placeholder="Enter city"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="area">Area</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="area"
//                   placeholder="Enter area"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="zipCode">Zip Code</label>
//                 <input
//                   type="text"
//                   name="zipCode"
//                   value={formData.zipCode}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="zipCode"
//                   placeholder="Enter zip code"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter password"
//                   required
//                 />
//               </div>
//               {error && (
//                 <div className="form-group">
//                   <div className="alert alert-danger">{error}</div>
//                 </div>
//               )}
//               <br />
//               <button type="submit" className="btn btn-primary mt-2">
//                 Register
//               </button>
//             </form>
//           ) : !otpVerified ? (
//             <form onSubmit={handleOtpVerify} className="otp-form mt-3">
//               <div className="form-group">
//                 <label htmlFor="otp">Enter OTP</label>
//                 <input
//                   type="text"
//                   name="otp"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="form-control"
//                   id="otp"
//                   placeholder="Enter OTP"
//                   required
//                 />
//               </div>
//               {error && (
//                 <div className="form-group">
//                   <div className="alert alert-danger">{error}</div>
//                 </div>
//               )}
//               <button type="submit" className="btn btn-primary mt-2">
//                 Verify OTP
//               </button>
//             </form>
//           ) : null}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Signup;
