import styled from "styled-components";

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    align-items: center;
    
    h4 {
        font-size: clamp(1rem, 2vw, 2rem);
        margin-bottom: 1.3rem;
    }

    .logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 1.3rem;
    }

    .btn {
        margin-top: 0.6rem;
    }

    p {
        margin-top: 1rem;
        text-align: center;
    }

    .form-link {
        color: orange;
    }

`;

export default Wrapper;