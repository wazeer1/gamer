import React, { useState } from "react";
import styled from "styled-components";
import Player from "../assets/team-1.png";
import Slider from "react-slick";

const Teams = () => {
    const [active, setActive] = useState("");
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    const Datas = [
        {
            id: 1,
            name: "WAZEER AHMED",
            game: "BATTLEGROUND",
            image: Player,
        },
        {
            id: 2,
            name: "SHIYAS SHAN",
            game: "BATTLEGROUND",
            image: Player,
        },
        {
            id: 3,
            name: "AJMAL SAKEER",
            game: "BATTLEGROUND",
            image: Player,
        },
        {
            id: 4,
            name: "SHYAM KUMAR",
            game: "BATTLEGROUND",
            image: Player,
        },
        // {
        //     id:5,
        //     'name':'SHYAM KUMAR',
        //     'game':'BATTLEGROUND',
        //     'image':Player
        // },
    ];
    console.log(active);
    return (
        <Cover>
            <Wrapper>
                <Top>
                    <h5>OUR GAMMERS</h5>
                    <h3>
                        MEET OUR <span>GAMERS</span>
                    </h3>
                    <p>
                        Our success in creating business solutions is due in
                        large part to our talented and highly committed team.
                    </p>
                </Top>
                <Bottom>
                    <WidgetContainer>
                        <Slider {...settings}>
                            {Datas.map((item) => (
                                <Widget
                                    active={active}
                                    onMouseOver={() => setActive(item.id)}
                                    onMouseOut={() => setActive("")}
                                    id={item.id}
                                >
                                    <ImageCount>
                                        <img src={item.image} alt="image" />
                                    </ImageCount>
                                    <WidBottom id={item.id} active={active}>
                                        <GameName>{item.game}</GameName>
                                        <Cont
                                            className={
                                                active == item.id && "active"
                                            }
                                        >
                                            <h3>{item.name}</h3>
                                        </Cont>
                                        <Cont1
                                            className={
                                                active == item.id && "active"
                                            }
                                        ></Cont1>
                                        <Cont2
                                            className={
                                                active == item.id && "active"
                                            }
                                        ></Cont2>
                                        <Cont3
                                            className={
                                                active == item.id && "active"
                                            }
                                        ></Cont3>
                                    </WidBottom>
                                    <span className="design1"></span>
                                    <span className="design2"></span>
                                    <span className="design3"></span>
                                    <span className="design4"></span>
                                    <span className="design5"></span>
                                </Widget>
                            ))}
                        </Slider>
                    </WidgetContainer>
                </Bottom>
            </Wrapper>
        </Cover>
    );
};

export default Teams;
const Cover = styled.div`
    // height: 100vh;
    padding: 80px 0px;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 40px;
    h5 {
        font-size: 22px;
    }
    h3 {
        font-size: 40px;
        font-family: "Oxanium SemiBold";
        span {
            color: #9841ff;
            font-family: "Oxanium SemiBold";
        }
    }
    p {
        width: 40%;
        margin: 0 auto;
    }
`;
const Bottom = styled.div``;
const WidgetContainer = styled.div`
    padding-top: 50px;
`;
const Widget = styled.div`
    width: 23%;
    position: relative;
    span {
        &.design1 {
            background: linear-gradient(
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
            width: 30%;
            // height:60%;
            height: ${({ active, id }) => (active == id ? "70%" : "60%")};
            transition: 0.8s ease;
            position: absolute;
            bottom: 10%;
            z-index: -3;
            left: -10px;
            opacity: 0.3;
            &:before {
                background-image: repeating-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.25),
                    rgba(255, 255, 255, 0.25) 1px,
                    transparent 1px,
                    transparent 6px
                );
                background-size: 4px 4px;
                content: "";
                position: absolute;
                left: 0%;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        &.design2 {
            background: linear-gradient(
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
            width: 30%;
            height: ${({ active, id }) => (active == id ? "85%" : "75%")};
            transition: 0.6s ease;
            position: absolute;
            bottom: 10%;
            z-index: -2;
            left: 15%;
            opacity: 0.5;
            &:before {
                background-image: repeating-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.25),
                    rgba(255, 255, 255, 0.25) 1px,
                    transparent 1px,
                    transparent 6px
                );
                background-size: 4px 4px;
                content: "";
                position: absolute;
                left: 0%;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        &.design3 {
            background: linear-gradient(
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
            width: 30%;
            // height:90%;
            height: ${({ active, id }) => (active == id ? "100%" : "90%")};
            transition: 0.4s ease;
            position: absolute;
            bottom: 10%;
            z-index: -1;
            left: 30%;
            opacity: 0.7;
            &:before {
                background-image: repeating-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.25),
                    rgba(255, 255, 255, 0.25) 1px,
                    transparent 1px,
                    transparent 6px
                );
                background-size: 4px 4px;
                content: "";
                position: absolute;
                left: 0%;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        &.design4 {
            background: linear-gradient(
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
            width: 30%;
            height: 75%;
            height: ${({ active, id }) => (active == id ? "85%" : "75%")};
            transition: 0.6s ease;
            position: absolute;
            bottom: 10%;
            z-index: -2;
            left: 50%;
            opacity: 0.5;
            &:before {
                background-image: repeating-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.25),
                    rgba(255, 255, 255, 0.25) 1px,
                    transparent 1px,
                    transparent 6px
                );
                background-size: 4px 4px;
                content: "";
                position: absolute;
                left: 0%;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        &.design5 {
            background: linear-gradient(
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
            width: 30%;
            height: ${({ active, id }) => (active == id ? "70%" : "60%")};
            transition: 0.8s ease;
            position: absolute;
            bottom: 10%;
            z-index: -3;
            left: 65%;
            opacity: 0.3;
            &:before {
                background-image: repeating-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.25),
                    rgba(255, 255, 255, 0.25) 1px,
                    transparent 1px,
                    transparent 6px
                );
                background-size: 4px 4px;
                content: "";
                position: absolute;
                left: 0%;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
`;
const WidBottom = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    gap: 5px;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        width: 60%;
        height: 100%;
        background: #fff;
        // left: -15px;
        left: ${({ active, id }) => (active == id ? "-15px" : "0")};
        top: ${({ active, id }) => (active == id ? "-15px" : "0")};
        z-index: 0;
        transition: 0.4s ease;
        transform: skew(-30deg);
    }
    // background: #fff;
    // transform: skew(-30deg);
`;
const Cont = styled.div`
    width: 70%;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(
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
    transform: skew(-30deg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &:before {
        background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 6px
        );
        background-size: 4px 4px;
        content: "";
        position: absolute;
        left: 0%;
        top: 0;
        width: 100%;
        height: 100%;
    }
    &.active {
        width: 80%;
        transition: 0.4s ease;
    }
`;
const Cont1 = styled.div`
    width: 10%;
    height: 100%;
    background: linear-gradient(
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
    transform: skew(-30deg);
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    &.active {
        width: 10%;
        transition: 0.4s ease;
    }
    &:before {
        background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 6px
        );
        background-size: 4px 4px;
        content: "";
        position: absolute;
        left: 0%;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;
const Cont2 = styled.div`
    width: 5%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: linear-gradient(
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
    transform: skew(-25deg);
    &.active {
        width: 5%;
        transform: skew(-30deg);
        transition: 0.4s ease;
    }
    &:before {
        background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 6px
        );
        background-size: 4px 4px;
        content: "";
        position: absolute;
        left: 0%;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;
const Cont3 = styled.div`
    width: 5%;
    height: 100%;
    background: #fff;
    transform: skew(-25deg);
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    &.active {
        width: 5%;
        transform: skew(-30deg);
        background: linear-gradient(
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
        transition: 0.4s ease;
    }
    &:before {
        background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 6px
        );
        background-size: 4px 4px;
        content: "";
        position: absolute;
        left: 0%;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;
const ImageCount = styled.div`
    width: 90%;
    margin: 0 auto;
    img {
        width: 100%;
    }
`;
const GameName = styled.div`
    width: 180px;
    height: 25px;
    background: #fff;
    position: absolute;
    bottom: -15px;
    z-index: 20;
    transform: skew(-30deg);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`;
