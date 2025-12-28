import styled from "styled-components";
import { Logo, RegAndLogForm } from "../components";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <form className="form">
                <Logo />
                <h4>Create an Account</h4>
                <RegAndLogForm type="text" name="name" label="First Name" />
                <RegAndLogForm type="text" name="lastName" label="Last Name" />
                <RegAndLogForm type="email" name="email" label="E-Mail" />
                <RegAndLogForm type="password" name="password" label="Password" />
                <button type="submit" className="btn btn-block">Register</button>
                <div>
                <Link to="/login" className="login-btn"> Log In Instead</Link>
                </div>
            </form>            
        </>
    );
};

export default Register;