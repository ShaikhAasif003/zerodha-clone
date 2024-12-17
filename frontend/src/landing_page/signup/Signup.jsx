
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Navbar from '../Navbar';
import Footer from '../Footer';

const Signup = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
    });
    const { name, email, password, username } = inputValue;

    // Handle input changes
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Display error toast
    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        });
    };

    // Display success toast
    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/auth/signup", // Ensure this endpoint is correct for your backend
                inputValue,
                { withCredentials: true }
            );
            console.log(data)
            const { success, message } = data;
            if (success) {
                window.open("http://localhost:5174", "_self"); 
                handleSuccess(message);
                
               
            } else {
                handleError(message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            handleError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    }
    return (
      <div>
             <Navbar/>
             <div className='container my-5 p-5' > 
               <div className='row m-4 p-5'>
                 <div className="col-8">
                   <img src="Assets/signup-image.png" alt="" srcset="" />
                 </div>
              
      
                <div className="col-4">
                  <form action="" onSubmit={handleSubmit} className="signup-form" >
                   <h2 className='text-center  mb-5 text-muted'>Signup now</h2>
                   <div class="row mb-4">
                       <label for="name" class="col-sm-3 col-form-label " >Name</label>
                        <div class="col-sm-9 ">
                         <input type="text" name='name' value={name} placeholder='Enter you name' onChange={handleOnChange} required class="form-control" id='name' />
                       </div>
                   </div>

                   <div class="row mb-4">
                       <label for="username" class="col-sm-3 col-form-label " >Username</label>
                        <div class="col-sm-9 ">
                         <input type="text" name='username' value={username} placeholder='Enter you username' onChange={handleOnChange} required class="form-control" id='username' />
                       </div>
                   </div>
      
                   <div class="row mb-4">
                       <label for="email" class="col-sm-3 col-form-label " >Email</label>
                        <div class="col-sm-9 ">
                         <input type="email" name='email' value={email} placeholder='Enter you Email' onChange={handleOnChange} required class="form-control" id='email' />
                       </div>
                   </div>

                    <div class="row mb-3">
                      <label for="password" class="col-sm-3 col-form-label">Password</label>
                       <div class="col-sm-9">
                         <input type="password" name='password' value={password} placeholder='Enter you password' onChange={handleOnChange} required  class="form-control" id="password" />
                      </div>
                     </div>
                     <div className='row mt-4 mb-4'>
                       <div className=' batton text-center'>
                         <button type="submit" className='btn btn-primary col-12 '  >Sign up</button>
                       </div>
                    </div>
                    <div className="text-center">
                      <span className="login-link ">
                        Already have an account?  &nbsp; <Link to="/login">Login</Link>
                      </span>
                    </div>
                   
               </form>

             </div>
             <div className='text-center mt-5'>
               <p style={{lineHeight:"1.5",fontSize:"0.9rem"}} className='text-muted'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
             </div>
            
             <div className='text-center'>
               <p style={{lineHeight:"1.5",fontSize:"0.9rem"}} className='text-muted'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
             </div>
      
             </div>
      
             </div>
            <Footer/>
         </div>
    );
};

export default Signup;
