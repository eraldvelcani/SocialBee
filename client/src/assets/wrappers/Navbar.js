import styled from "styled-components";

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: gray;
    height: 6rem;

    .nav-center {
        display: flex;
        width: 90vw;
        align-items: center;
        justify-content: space-between;
    }
`;

export default Wrapper;