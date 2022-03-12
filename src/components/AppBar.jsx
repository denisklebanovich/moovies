import React from 'react';
import styled from "styled-components";
import logo from '../images/logo.png'
import home from '../images/home.png'
import movies from '../images/moovies.png'
import live from '../images/live.png'
import favourite from '../images/favourite.png'
import {Link} from "react-router-dom";

const AppBar = () => {
    return (
        <Container>
            <img src={logo}/>
            <Button><img src={home}/></Button>
             <Button><img src={movies}/></Button>
            <Button><img src={live}/></Button>
            <Button><img src={favourite}/></Button>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px dashed #7B61FF;
  box-sizing: border-box;
  border-radius: 5px;
  width: 88px;
  height: 1032px;
  align-content: center;
`
const Button = styled.button`
  all: unset;
  min-height: 32px;
  min-width: 32px;
  cursor: pointer;
  margin: 3rem 5rem;
`
export default AppBar;
