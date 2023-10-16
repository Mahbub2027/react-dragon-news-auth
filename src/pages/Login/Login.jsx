import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            console.log(result.user);

            // navigate after login 
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error);
        })
    }

    
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="mt-16 ">
                <h2 className="text-center text-2xl font-semibold">Login your account</h2>
                <div className="card mx-auto w-full max-w-sm  bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <button className="py-2 w-full bg-gray-700 text-white font-bold">Login</button>
                                </div>
                                <p>New here? Please <Link className="text-blue-700 underline" to='/register'>Register</Link></p>
                            </form>
                </div>
            </div>
        </div>
    );
};

export default Login;