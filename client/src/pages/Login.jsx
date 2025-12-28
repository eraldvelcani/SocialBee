import Wrapper from "../assets/wrappers/RegAndLogin";
import { Logo, RegAndLogForm } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Login</h4>
                <RegAndLogForm type="email" name="email" label="E-Mail" />
                <RegAndLogForm type="password" name="password" label="Password" />
                <button type="submit" className="btn btn-block">Log In</button>
                <button type="button" className="btn btn-block">for demo</button>
                <p>
                    <Link to="/register" className="form-link">Create an Account</Link>
                </p>
            </form>
        </Wrapper>
    );
};

export default Login;