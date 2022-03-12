import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const MovieSlider = () => {
    const [movies,setMovies] = useState([]);
    const getMovies = async ()=>{
        const api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=332f32a452284612e601ec8d489d4212`);
        const data = await api.json();
        setMovies(data.results.slice(0,5))
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:true
    };
    useEffect(()=>{
        getMovies()
        },[])
    return (
        <Slider style={{marginLeft:40}}>
            {movies.map((movie)=>{
                return(
                       <Poster key = {movie.id}>

                        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}/>
                       </Poster>
                );


            })}
        </Slider>
    );
};
const Poster = styled.div`
  align-content: center;
  display: flex;
`
export default MovieSlider;
