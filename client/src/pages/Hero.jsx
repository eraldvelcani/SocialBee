import styled from "styled-components";
import Wrapper from "../assets/wrappers/Hero";
import main from "../assets/images/main.png";
import logo from "../assets/images/logo.png";
import { Logo } from "../components";

const Hero = () => {
    return (<Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>
                    Post what's <span>Bu<span className="blackSpan">zz</span>in<span className="blackSpan">'</span></span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cum voluptate. Quia, repellat tempora! Aut quibusdam sunt veniam et, tempore ipsam est pariatur hic minima sint facilis, placeat voluptas quisquam maiores. Nobis sint cum voluptatum. Rem ad voluptate quos ipsum placeat nulla adipisci, odio dignissimos? Ullam vel reiciendis delectus enim.
                </p>
            </div>
        </div>
    </Wrapper>
    )
};

export default Hero;