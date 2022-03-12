import React from 'react';
import Slider from "../components/Slider";
import MovieSlider from "../components/Slider";
import AppBar from "../components/AppBar";
import styled from "styled-components";

const Home = () => {
    return (
        <Main>
            <AppBar/>
            <MovieSlider/>
        </Main>
    );
};
const Main = styled.div`
 height: 648px;
`
export default Home;
