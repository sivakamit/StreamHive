import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
    width: 360px;
    /* height: 202px; */
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "55px")};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 12px;
`;

const Img = styled.img`
    width: ${(props) => (props.type === "sm" ? "180px" : "100%")};
    height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
    background-color: #999;
    border-radius: 10px 10px;
`;

const Details = styled.div`
    display: flex;
    margin-top: 6px;
    gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 3px 0px;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`users/find/${video.userId}`);
            setChannel(res.data);
        };
        fetchChannel();
    }, [video.userId]);

    return (
        <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Img type={type} src={video.imgUrl}/>
                <Details type={type}>
                    <ChannelImage type={type} src={channel.img}/>
                    <Texts>
                        <Title>{video.title}</Title>
                        <ChannelName>{!!channel? channel.name: ""}</ChannelName>
                        <Info>{video.views} Views • {format(video.createdAt)}</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card