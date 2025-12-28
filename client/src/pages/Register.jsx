import styled from "styled-components";
import { Logo, RegForm } from "../components";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <form className="form">
                <Logo />
                <h4>Create an Account</h4>
                <RegForm type="text" name="name" label="First Name" />
                <RegForm type="text" name="lastName" label="Last Name" />
                <RegForm type="email" name="email" label="E-Mail" />
                <RegForm type="password" name="password" label="Password" />
                <button type="submit" className="btn btn-block">Register</button>
                <p>Already own an account?
                    <Link to="/login" className="login-btn"> Login</Link>
                </p>
            </form>            
        </div>
    );
};

export default Register;