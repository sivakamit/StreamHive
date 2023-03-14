import React from "react";
import styled from 'styled-components';
import logo from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import InfoIcon from '@mui/icons-material/Info';
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { logout } from "../redux/userSlice";

const Container = styled.div`
    flex: 1.5;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 120vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;


const Menu = ({ darkMode, setDarkMode }) => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const handleLogOut = async (e) => {
        dispatch(logout());
    }

    return (
        <Container>
            <Wrapper>
                <Link to='/'style={{ textDecoration: "none", color:"inherit" }}>
                    <Logo>
                        <Img src={logo}/>
                        StreamHive
                    </Logo>
                </Link>
                <Link to='/'style={{ textDecoration: "none", color:"inherit" }}>
                    <Item>
                        <HomeIcon/>
                        Home
                    </Item>
                </Link>
                <Link to="trends" style={{textDecoration:"none", color: "inherit" }}>
                    <Item>
                        <ExploreIcon />
                        Explore
                    </Item>
                </Link>
                <Link to="subscriptions" style={{textDecoration:"none", color: "inherit" }}>
                    <Item>
                        <SubscriptionsIcon />
                        Subscriptions
                    </Item>
                </Link>
                <Hr />
                <Item>
                    <LibraryMusicIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                {!currentUser &&
                    <>
                    <Login>
                        Sign in to like videos, comment, and subscribe.
                        <Link to="signin" style={{textDecoration:"none"}}>
                            <Button>
                            <AccountCircleIcon />
                            SIGN IN
                            </Button>
                        </Link>
                    </Login>
                    <Hr />
                    </>
                }
                <Title>BEST OF STREAMHIVE</Title>
                <Item>
                    <MusicNoteIcon />
                    Music
                </Item>
                <Item>
                    <SportsFootballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsRoundedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <InfoIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
                <Item onClick={handleLogOut}>
                    <ExitToAppIcon />
                    Sign Out
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu