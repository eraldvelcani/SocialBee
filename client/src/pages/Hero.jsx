import styled from "styled-components";
import Wrapper from "../assets/wrappers/Hero";
import main from "../assets/images/main.png";
import logo from "../assets/images/logo.png";

const Hero = () => {
    return (<Wrapper>
        <nav>
            <img src={logo} alt="logo" className="logo" />
        </nav>
        <div className="container page">
            <h1>
                Post what's <span>Buzzin'</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cum voluptate. Quia, repellat tempora! Aut quibusdam sunt veniam et, tempore ipsam est pariatur hic minima sint facilis, placeat voluptas quisquam maiores. Nobis sint cum voluptatum. Rem ad voluptate quos ipsum placeat nulla adipisci, odio dignissimos? Ullam vel reiciendis delectus enim.
            </p>
        </div>
    </Wrapper>
    )
};

export default Hero;