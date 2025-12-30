import styled from "styled-components";

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }

    .sidebar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        inset: 0;
        z-index: -1;
        opacity: 0;
        transition: 0.3s ease-in-out all;
        visibility: hidden;
    }

    .show-sidebar {
        z-index: 999;
        opacity: 1;
        visibility: visible;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size:2rem;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
    }

    .icon {
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        margin-right: 1rem;
    }

    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        background: gray;
        width: 90vw;
        height: 95vh;
        border-radius: 5px;
        padding: 4rem 2rem;
        position: relative;
    }

    .nav-link {
        display: flex;
        align-items: center;
        color: goldenrod;
        transition: 0.3s ease-in-out all;
        padding: 1rem 0;
    }

    .nav-link:hover {
        color: darkorange;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
    }

`;

export default Wrapper;