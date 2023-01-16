import React from "react";
import styled from "styled-components";

const SingleMatch = ({ item }) => {
    return (
        <Cover>
            <Left>
                <img src={item.team.image} alt="item" />
                <h4>{item.team.name}</h4>
                <DateContent>
                    <h4>{item.team.group}</h4>
                </DateContent>
            </Left>
            <Center>
                <h3>{item.time}</h3>
                <h4>{item.date}</h4>
            </Center>
            <Right class="oponent">
                <h4>{item.team1.name}</h4>
                <DateContent1>
                    <h3>{item.team1.group}</h3>
                </DateContent1>
                <img src={item.team1.image} alt="item" />
            </Right>
        </Cover>
    );
};

export default SingleMatch;
const Cover = styled.div`
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background:red;
`;
const Left = styled.div`
    visibility: visible;
    animation-delay: 200ms;
    animation-name: fade-in-left;
    position: relative;
    width: 40%;
    display: flex;
    align-items: center;
    &:before {
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
        clip-path: polygon(90% 0, 100% 40%, 100% 100%, 0 100%, 0 0);
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 90%;
        height: 110px;
        transform: translateY(-50%);
        opacity: 30%;
        border-radius: 5px;
        z-index: -1;
    }
    h4 {
        font-size: 20px;
        font-family:'Oxanium SemiBold';

    }
`;
const DateContent = styled.div`
    background: #f90cff;
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
    clip-path: polygon(100% 0, 100% 100%, 10% 100%, 0 60%, 0 0);
    border-radius: 3px;
    padding: 15px 20px;
    position: absolute;
    right: 35px;
    bottom: 15px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    h4 {
        font-size: 14px;
    }
`;
const Right = styled.div`
    h4{
        margin-left:40px;
        font-family:'Oxanium SemiBold';

    }
    text-align: left;
    visibility: visible;
    animation-delay: 200ms;
    animation-name: fade-in-left;
    position: relative;
    width: 40%;
    display: flex;
    align-items: center;
    &:before {
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
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 40%);
        right: auto;
        left: 0;
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 90%;
        height: 110px;
        transform: translateY(-50%);
        opacity: 30%;
        border-radius: 5px;
        z-index: -1;
    }
    img {
        width: 200px;
        object-fit: contain;
        position: absolute;
        right:0;
    };
    h4 {
        font-size: 20px;
    }
`;
const DateContent1 = styled.div`
    background: #f90cff;
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
    clip-path: polygon(100% 0, 100% 100%, 10% 100%, 0 60%, 0 0);
    border-radius: 3px;
    padding: 15px 20px;
    position: absolute;
    left: 35px;
    bottom: -68px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    h3 {
        font-size: 14px;
    }
`;
const Center = styled.div`
text-align: center;
    h3 {
        font-size: 56px;
    }
`;
