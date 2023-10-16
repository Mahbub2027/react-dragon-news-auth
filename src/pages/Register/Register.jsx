import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Register = () => {

    const {createUser} = useContext(AuthContext);    

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="mt-16 ">
                <h2 className="text-center text-2xl font-semibold">Register your account</h2> 
                <div className="card mx-auto w-full max-w-sm  bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="py-2 w-full bg-gray-700 text-white font-bold">Register</button>
                                </div>
                                <p>Already have an account? Please <Link className="text-blue-700 underline" to='/login'>Login</Link></p>
                            </form>
                </div>
            </div>
        </div>
    );
};

export default Register;