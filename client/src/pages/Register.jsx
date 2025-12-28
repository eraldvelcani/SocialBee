import styled from "styled-components";
import { Logo, RegAndLogForm } from "../components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegAndLogin";

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Create an Account</h4>
                <RegAndLogForm type="text" name="name" label="First Name" />
                <RegAndLogForm type="text" name="lastName" label="Last Name" />
                <RegAndLogForm type="email" name="email" label="E-Mail" />
                <RegAndLogForm type="password" name="password" label="Password" />
                <button type="submit" className="btn btn-block">Register</button>
                <p>
                    <Link to="/login" className="form-link"> Log In Instead</Link>
                </p>
            </form>            
        </Wrapper>
    );
};

export default Register;