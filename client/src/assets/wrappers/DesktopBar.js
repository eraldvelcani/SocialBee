import styled from "styled-components";

const Wrapper = styled.aside `
    display: none;
    @media (min-width: 992px) {
        display: block;
        box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.2);
        
        .sidebar-container {
            background: gray;
            min-height: 100vh;
            height: 100%;
            width: 300px;
            margin-left: -300px;
            transition: margin-left 0.4s ease-in-out;
        }

        .show-sidebar {
            margin-left: 0;
        }

        .content {
            position: sticky;
            top: 0;
        }

        .nav-link {
            display: flex;
            text-transform: capitalize;
            align-items: center;
            padding: 1rem 0 1rem 2.5rem;
        }

        .nav-links {
            display: flex;
            flex-direction: column;
            padding-top: 1.5rem;
        }

        .icon {
            display: grid;
            place-items: center;
            margin-right: 1rem;
            font-size: 1.5rem;
        }

        header {
            height: 6rem;
            display: flex;
            align-items: center;
            padding-left: 2.5rem;
        }

        .active {
            color: goldenrod;
        }

    }
`;

export default Wrapper;