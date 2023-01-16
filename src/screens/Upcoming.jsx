import React from "react";
import styled from "styled-components";
import TeamLog from "../assets/team-logo-1.png";
import TeamLog1 from "../assets/team-logo-2.png";
import SingleMatch from "./SingleMatch";

const Upcoming = () => {
    const TournData = [
        {
            id: 1,
            time: "10:00",
            date: "25TH May 2024",
            team: {
                name: "PURPLE DEATH CADETS",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog,
            },
            team1: {
                name: "TRIGGER BRAIN SQUAD",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog1,
            },
        },
        {
            id: 2,
            time: "12:30",
            date: "10TH Jan 2024",
            team: {
                name: "THE BLACK HAT HACKERS",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog,
            },
            team1: {
                name: "YOUR WORST NIGHTMARE",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog1,
            },
        },
        {
            id: 3,
            time: "04:20",
            date: "15TH Dec 2024",
            team: {
                name: "PURPLE DEATH CADETS",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog,
            },
            team1: {
                name: "TRIGGER BRAIN SQUAD",
                group: "GROUP 04 | MATCH 06TH",
                image: TeamLog1,
            },
        },
    ];
    return (
        <Cover>
            <Top>
                <h6>UPCOMING MATCHES</h6>
                <h4>
                    BATTLES EXTREME MASTERS<span> TOURNAMENT</span>
                </h4>
                <p>
                    Our success in creating business solutions is due in large
                    part to our talented and highly committed team.
                </p>
            </Top>
            <Matches>
                <Wrapper>
                    {TournData.map((item) => (
                        <SingleMatch item={item} />
                    ))}
                </Wrapper>
            </Matches>
        </Cover>
    );
};

export default Upcoming;
const Cover = styled.div`
    // height: 100vh;
    padding-top: 80px;
    padding-bottom: 80px;
`;
const Top = styled.div`
    text-align: center;
    h6 {
        font-size: 18px;
    }
    h4 {
        font-size: 45px;
        width: 40%;
        text-align: center;
        margin: 0 auto;
        font-family: "Oxanium SemiBold";
        span {
            color: #9841ff;
            font-family: "Oxanium SemiBold";
        }
    }
    p {
        font-size: 16px;
        width: 40%;
        margin: 0 auto;
    }
`;
const Matches = styled.div``;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
`;
