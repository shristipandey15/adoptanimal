import { useState, useEffect } from 'react';
import './Login.css';

function Login() {

  const initialValues = {username: '',  email: '', password: ''};  
  const [values, setValues] = useState (initialValues);  
  const [formErrors, setFormErrors] = useState({}); 
  const [isSubmit, setIsSubmit] = useState(false);  


  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({ ...values, [name] : value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true) 
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit ){
      console.log(values);
    }
  }, [formErrors]);


  const validate = (vals) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ //for e-mail validation purposes

    if (!vals.username){
      errors.username = 'Username is required!'
    }
    
    // E-mail
    if (!vals.email) {
      errors.email = "Email is required!";
    }
    
    else if (!regex.test(vals.email)) {  
      
      errors.email = "This is not a valid email format!";
    }

    // Password 
    if (!vals.password) {
      errors.password = "Password is required";
    } 
    else if (vals.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } 
    else if (vals.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  }

  return (
    <div className="container">

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='successMsg'>Logged in successfully!</div>
      ) : (
        <div></div> 
      )}

      <form onSubmit={handleSubmit}>
        <h3>Login Form</h3>
        <div className='inputDiv'>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value= {values.username}  
              onChange={handleChange} 
            />
          </div>
          <p>{formErrors.username}</p>
          
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value= {values.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value= {values.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;


