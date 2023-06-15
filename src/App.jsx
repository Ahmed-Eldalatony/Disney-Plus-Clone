import Header from "./Components/Header";
import Home from "./Components/Home";
import useFetch from "./hooks/useFetch";
import StyledComponent from "styled-components"
import HeroBanner from "./Components/homeBanner";;
import axios from "axios";
import Viewers from "./Components/Viewers";
import { useState, useEffect } from "react";
import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "../api";
import Img from '../src/Components/lazy-load-img'
import MoviesList from "./Components/MoviesList";


function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        
      };
      // console.log(url.profile)
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <>
      <Header />
      <HeroBanner />
      {/* <Img src={background} /> */}
      {/* make a div with an bakcgroun image and a video absoloute chech if video is appearing behind the imaged */}
      <div className="container">
        <Viewers />
        <Home homeUrl={url} />
        <MoviesList slider={"--disney-originals-slider"} />
        <MoviesList />

      </div>
    </>
  );
}

export default App;
