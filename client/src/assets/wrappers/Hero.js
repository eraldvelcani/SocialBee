import styled from "styled-components";

const Wrapper = styled.section`
    nav {
        display: flex;
        align-items: center;
        height: 6rem;
        width: 90vw;
        max-width: 1120px;
        margin: 0 auto;
    }

    h1 {
        font-weight: 600;        
        margin-bottom: 1.5rem;
    }

    h1 span {
        color: goldenrod;
    }

    .page {
        display: grid;
        align-items: center;
        min-height: calc(100vh - 6rem);
        margin-top: -3rem;
    }

    .btn {
        padding: 0.75rem 1rem;
    }

    p {
        max-width: 30em;
        color: black;
        margin-bottom: 1.5rem;
    }

    .reg-hyper {
        margin-right: 1rem;
    }

    .main-img {
        display: none;
    }

    .img {
        width: 100%;
        object-fit: cover;
    }

    @media (min-width: 990px) {
        .page {
            grid-template-columns: 1fr  400px;
            column-gap: 2.5rem;
        }

        .main-img {
            display: block;
            object-fit: cover;
        }

    }

`;
export default Wrapper;
