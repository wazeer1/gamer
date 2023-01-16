import React from "react";
import styled from "styled-components";
import Hero from "../assets/game-charecters.png";

const Spotlight = () => {
    return (
        <Container>
            <Wrapper>
                <Cover>
                    <h6>ENJOY THE GAMES</h6>
                    <h4>Epic Games Made For True Gamers!</h4>
                    <SearchButton>
                        Join Our Team
                        <span></span>
                    </SearchButton>
                </Cover>
            </Wrapper>
            <Design>
                <div class="hero-element">
                    <img src={Hero} alt="thumb" />
                    <div class="shape-wrap">
                        <div class="shape shape-1"></div>
                        <div class="shape shape-2"></div>
                        <div class="shape shape-3"></div>
                        <div class="shape shape-4"></div>
                    </div>
                    <div class="shape-wrap right">
                        <div class="shape shape-1"></div>
                        <div class="shape shape-2"></div>
                        <div class="shape shape-3"></div>
                        <div class="shape shape-4"></div>
                    </div>
                </div>
            </Design>
        </Container>
    );
};

export default Spotlight;
const Container = styled.div`
    padding-top: 100px;
    // background:#1b0e22;
    // background-image: url("https://rare-gallery.com/uploads/posts/930796-Vampire-The-Masquerade-Coteries-of-New-York-New-York-City.jpg");
    backdrop-filter: blur(4px);
    &::before{
        background: linear-gradient(90deg, rgba(152, 65, 255, 0) 0%, rgba(152, 65, 255, 1) 50%, rgba(152, 65, 255, 0) 100%);
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Cover = styled.div`
    display: block;
    text-align: center;
    h6 {
        font-size: 22px;
        font-family: "Oxanium", sans-serif;
        color: #fff;
    }
    h4 {
        font-size: 60px;
        font-family:'Oxanium SemiBold';
        width: 60%;
        margin: 0 auto;
        color: #fff;
        margin-bottom: 30px;
    }
`;
const SearchButton = styled.div`
    height: 45px;
    background: #f90cff;
    cursor: pointer;
    background-image: linear-gradient(
        to right bottom,
        #f90cff,
        #e027ff,
        #c534ff,
        #a93eff,
        #8a44ff,
        #6560ff,
        #3c73ff,
        #0081ff,
        #009cff,
        #00b3ff,
        #00c6f5,
        #0cd7e8
    );
    clip-path: polygon(0% 0%, 90% 0, 100% 30%, 100% 100%, 0 100%);
    color: #fff;
    font-family: "Oxanium", sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0;
    text-align: center;
    text-transform: capitalize;
    display: inline-block;
    position: relative;
    min-width: 180px;
    height: 50px;
    line-height: 50px;
    padding: 0 40px;
    border-radius: 2px;
    white-space: nowrap;
    overflow: hidden;
    transition: all ease 700ms;
    -moz-transition: all ease 700ms;
    -webkit-transition: all ease 700ms;
    -ms-transition: all ease 700ms;
    -o-transition: all ease 700ms;
    z-index: 1;
    &:hover{
        background:blue;d
        transition:.4s ease;
    }
    span {
        background: #9841ff none repeat scroll 0 0;
        border-radius: 50%;
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 38.5px;
        left: 21px;
        z-index:-1;
        
    }
`;
const Design =styled.div`
    width:50%;
    margin:0 auto;
`;