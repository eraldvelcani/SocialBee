import styled from "styled-components";

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: gray;
    height: 6rem;
    width: 90vw;

    .nav-center {
        display: flex;
        width: 90vw;
        align-items: center;
        justify-content: space-between;
    }

    .toggle-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 1.65rem;
        background: transparent;
        border-color: transparent;
    }

    .btn-container {
        display: flex;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        width: 200px;
    }

    .btn-container {
        display: flex;
        align-items: center;
    }

    @media (min-width: 992px) {
        position: sticky;
        top: 0;

        .nav-center {
            width: 90%;    
        }
    }

`;

export default Wrapper;