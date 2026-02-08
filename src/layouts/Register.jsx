import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase.init";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);


  
  const handleShow = () => {
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    
    const password = e.target.password.value;

    console.log(name, email, password);
    

    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(passwordRegEx.test(password) === false){
          setError('password need 1 uppercase, 1 lowercase, 1 speacial, 1 number')
          return;
        }


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        if(result.user.email === e.target.email.value){
          alert ('user already exist');
        }
        
        setUser(user);
        Swal.fire({
          title: "User Created successfully!",
          
          icon: "success",
        });

        
        
      })
      .catch((err) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handleSubmit}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              

              <label className="label">Password</label>
              <div className="relative">
                <input 
                type={show ? 'text' : 'password'}
                name="password"
                className="input "
                placeholder="Password"
              />
              <button onClick={()=> {setShow(!show)}} className="absolute right-7 mt-3">
                {
                  show ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                }
              </button>
              </div>

              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            {
              error && <p>{error}</p> 
            }
            <div>
              <h2>{user.email}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
