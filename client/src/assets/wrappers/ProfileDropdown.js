import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    .img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    .logout-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 0.5rem;
    }

    .dropdown {
        position: absolute;
        text-align: center;
        visibility: hidden;
        top: 30px;
        left: 0;
        width: 80%;
        border-radius: 0.25rem;
        background: black;
    }

    .dropdown-btn {
        background: transparent;
        color: white;
        border-color: transparent;
        border-radius: 0.25rem;
        padding: 0.4rem;
        cursor: pointer;
        width: 100%; //to prevent cursor pointer from being only on the actual button

    }

    .show-dropdown {
        visibility: visible;
    }

    
`;

export default Wrapper;