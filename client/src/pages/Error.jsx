import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Error";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <h1>4<span className="yellow">0</span>4</h1>
                <h2>Page Not Found</h2>
                <Link to="/dashboard">Return</Link>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <h1 className="unknown">Unknown Error</h1>
            <Link to="/">Return</Link>
        </Wrapper>
    )
};

export default Error;