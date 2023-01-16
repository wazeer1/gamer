import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const Header = () => {
    return (
        <Cover>
            <Wraper>
                <Left>
                    <h1>
                        <img src={Logo} />
                    </h1>
                </Left>
                <Center>
                    <ul>
                        <li>HOME</li>
                        <li>TOURNAMENT</li>
                        <li>PAGES</li>
                        <li>SHOP</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </Center>
                <Right>
                    <SearchButton>
                        Join Our Team
                        <span></span>
                    </SearchButton>
                </Right>
            </Wraper>
        </Cover>
    );
};

export default Header;
const Cover = styled.div`
    height: 100px;
    background: rgb(0, 3, 0);
    background: linear-gradient(
        164deg,
        rgba(0, 3, 0, .7) 4%,
        rgba(7, 11, 32, .5) 30%,
        rgba(5, 9, 55, .3) 40%
    );
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    backdrop-filter:blur(10px)
`;
const Wraper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    h1 {
        width: 150px;
        img {
            width: 100%;
        }
    }
`;
const Center = styled.div`
    ul {
        display: flex;
        gap: 20px;
        li {
            list-style: none;
            color: #fff;
            position: relative;
            cursor: pointer;
            font-family: "Oxanium", sans-serif;
            &:hover {
                &:after {
                    width: 100%;
                    transition: 0.4s ease;
                }
            }
            &:after {
                content: "";
                position: absolute;
                width: 0%;
                height: 3px;
                background: #fff;
                left: 0;
                bottom: -20%;
            }
        }
    }
`;
const Right = styled.div``;
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
