import styled from "styled-components";

const Wrapper = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    h1 {
        font-family: 'Orbitron', sans-serif;  
        font-size: clamp(5rem, 15vw, 20rem);
        color: black;
        .yellow {
            color: #db9718ff;
        }
    }

    .unknown {
        font-size: clamp(2rem, 5vw, 5rem);
    }
    
    h2 {
        margin-bottom: 0.5rem;
        font-size: clamp(2rem, 5vw, 5rem);
    }

    a {
        color: #db9718ff;    
        font-size: clamp(2rem, 3vw, 3rem);
        /* margin-top: 40px;
        padding: 7px 12px;
        line-height: .7;
        border: 2px solid black;
        background-color: black;
        border-radius: 7px */
    }
`;

export default Wrapper;