import React from "react";
import styled from "styled-components";

const Contact = () => {
    return (
        <Cover>
            <Wraper>
                <Left>
                    <h5>SEND US A MAIL</h5>
                    <h3>
                        JOIN US AS A SUPER FANS AND GET ALL{" "}
                        <span>THE BENEFITS</span>
                    </h3>
                    <p>
                        Our success in creating business solutions is due in
                        large part to our talented and highly committed team.
                    </p>
                    <SearchButton>
                        Join Our Team
                        <span></span>
                    </SearchButton>
                </Left>
                <Right>
                    <form>
                        <InputCover>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Mail" />
                        </InputCover>
                        <textarea placeholder="Message"></textarea>
                        <SearchButton>
                            Send Message
                            <span></span>
                        </SearchButton>
                    </form>
                </Right>
            </Wraper>
        </Cover>
    );
};

export default Contact;
const Cover = styled.div`
    padding: 80px 0px;
`;
const Wraper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 45%;
    h5 {
        font-size: 20px;
        margin-bottom: 15px;
    }
    h3 {
        font-size: 40px;
        margin-bottom: 15px;
        font-family: "Oxanium SemiBold";
        span {
            color: #9841ff;
            font-family: "Oxanium SemiBold";
        }
    }
    p {
        font-size: 16px;
        margin-bottom: 30px;
    }
`;
const Right = styled.div`
    width: 45%;
    form {
        textarea {
            background-color: rgba(12, 12, 53, 0.9);
            padding: 15px;
            border: none;
            color: #fff;
            height: 60px;
            border-radius: 2px;
            box-shadow: none;
            outline: none;
            box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 20%);
            width: 95%;
            margin-top: 20px;
            margin-bottom: 30px;
            font-family: "Oxanium SemiBold";
        }
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
const InputCover = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
        width: 45%;
        font-family: "Oxanium SemiBold";
        height: 35px;
        border: none;
        outline: none;
        background: rgba(12, 12, 53, 0.9);
        padding: 10px;
        font-weight: 600;
        color: #fff;
    }
`;
