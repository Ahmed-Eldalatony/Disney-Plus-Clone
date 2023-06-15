import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import Img from "../Components/lazy-load-img";
import axios from "axios";
import styled from "styled-components";
const TMDB_TOKEN= import.meta.env.VITE_TMDB_TOKEN
const randomize = Math.floor(Math.random() * 20)

const HeroBanner = () => {
  // ! Use State Hooks
  const [background, setBackground] = useState("");
  const [poster,setPoster] = useState("");
  const [logo,setLogo] = useState("");
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [scale,setScale] = useState("play");
  // Different Hooks
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading,movieId } = useFetch("/movie/upcoming"); //! why i can't set movies from here not from the the hook 
  
  const movieUrl= `https://api.themoviedb.org/3/movie/${movieId}`




  useEffect(() => {

    // const profile =
      // url.profile +
      // data?.results?.[randomize]?.profile_path;
    // const poster =
    //   url.poster+
    //   data?.results?.[randomize]?.poster_path;
    // const logos =
    //   url.poster+
    //   data?.results?.[randomize]?.images;
      


  }, [data]);
  

  // const searchQueryHandler = (event) => {
  //     if (event.key === "Enter" && query.length > 0) {
  //         navigate(`/search/${query}`);
  //     }
  // };
  useEffect(() => {
    
    movieId&&  axios.get(`${movieUrl}`, {

       headers: {
         Authorization: "bearer "+ TMDB_TOKEN,
       },
     }).then((res)=>{
      const title= res.data.original_title
      setTitle(title)
      const description= res.data.overview
      setDescription(description)
      const {runtime}= res.data
      const date= res.data.release_date.slice(0,4)
      setDate(date)
      const hours = Math.floor(runtime/60) 
      setHours(hours)
      const minutes = runtime%60
      setMinutes(minutes)



     } )
  
  }, [data]);





  useEffect(() => {
    
    movieId&&  axios.get(`${movieUrl}/images`, {

       headers: {
         Authorization: "bearer "+ TMDB_TOKEN,
       },
     })
     .then((res) =>{ 
      const backdrop= url.backdrop + res?.data?.backdrops[0]?.file_path
      const poster= url.backdrop + res?.data?.posters[0]?.file_path
      const logo= url.backdrop + res?.data?.logos[0]?.file_path
      setBackground(backdrop)
      setPoster(poster)
      setLogo(logo)
    }) ;
  }, [data]);
  

  return (
  <>
      <HomeBanner>
          {!loading && (
            <div>
              <div className="bg-cont">
                <Img className="background" src={background} />
              <div className="overlay"></div>
              {/* <div className="overlay h"></div> */}
                </div>
                <div className="overview">
            <div className="isolate">
              <Img className="logo" src={logo} />
              </div>
              <div className="details">
              <span className="date" >{date} -</span>
              <div className="duration">
              <span>{hours}h</span>
              <span>{minutes}m -</span>
              </div>
              <span>English</span>
              <span className="guidness">PG</span>

              </div>
              <p>{description}</p>
              <div className="cta">
                <div onMouseDown={(e)=> setScale("play scale")
                } 
                onMouseUp={e=> setTimeout(()=> setScale("play"),250) }
                className={scale}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                  <a href="">  Watch Now </a>
                </div>
                <div className="add">
                  <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></a>
                </div>
              </div>
            
              </div>
       
                {/* <Img className="Poster" src={poster} /> */}
                </div>
              
          )}
          const fetch = require('node-fetch');




  {/* //         <div className="opacity-layer"></div>
  //         <ContentWrapper>
  //             <div className="heroBannerContent">
  //                 <span className="title">Welcome.</span>
  //                 <span className="subTitle">
  //                     Millions of movies, TV shows and people to discover.
  //                     Explore now.
  //                 </span>
  //                 <div className="searchInput">
                      // <input */}
                  {/* //         type="text"
                  //         placeholder="Search for a movie or tv show...."
                  //         onChange={(e) => setQuery(e.target.value)}
                  //         onKeyUp={searchQueryHandler}
                  //     />
                  //     <button>Search</button>
                  // </div> */}
  {/* //             </div> */}
  {/* //         </ContentWrapper> */}
      </HomeBanner>
      </>
  );
};

export default HeroBanner;

const HomeBanner=styled.div`
/* font-family: 'Inter', sans-serif; */
font-family: 'Rubik Puddles', cursive;

  font-size: 1.8rem ;
  position:relative;
  border:1px solid red; // Wut???
  font-weight: 400;
  color:#D2D2D3;


  .bg-cont{
    position:fixed;
    top:0;
    width: 100%;
    height:100%;
  }
.overlay{
  position:absolute;
  width: 100%;
  margin-left:10rem;
  height: 100vh;
  background-image:linear-gradient(to right, rgb(13, 13, 13,.98) 0px ,
  rgb(13,13,13,.97) 6% ,
  rgba(13,13,13,.96) 7% ,
  rgba(13,13,13,.87) 20% ,
  rgba(13,13,13,.80) 30% ,
  rgba(13,13,13,.75) 100% );
  inset:0;
  z-index:100;
  /* &.h{
    background-image:linear-gradient(to top, rgba(10, 20, 65, 0.9) -50px ,
    rgba(104, 79, 79, 0.9) 36% ,
    rgba(139, 39, 39, 0.55)  );
    
  } */
}


  .background{
  width:100% ;
  height: 100%;
}



.overview {
  z-index:100;
  top:25vh;
  left:11rem;
  position:absolute;
  width: 47rem;

}
.details,.duration{
  display:flex;
  gap:1rem;
}
.guidness{
  font-size:1.5rem;
  padding: 0rem 1rem 0 1rem  ;
  line-height:2;
  border-radius :.5rem;
  display:inline-block;
  background-color:#3F4043;
  font-weight:600;
}
.details{
margin-bottom:1rem;
}
p{
font-weight:normal;
width: 45ch;
margin-bottom:1.5rem;
max-height:5rem ;
}
.isolate{
  width:100%  ;
  bottom:100px;
  margin-bottom:1rem;
}
.logo{
  width:100%;
}
span{
  display:block;

}
.cta{
  
  svg{
      fill:#D3D3D4;
      width:1.5rem
    }
  /* padding:1rem 0; */
  gap:1.5rem;
  width:100%;
  display:flex;
  justify-content:center;
  .play{
    width:89%;
    padding: 1rem  0;
    display:flex;
    background-color:#222326;
    gap:1rem;
    justify-content:center;
    border-radius:.4rem;
    &.scale{
      animation: scale .25s forwards;
    }
  }

  .add{
  width:11%;
  background-color:#222326;
  align-items: center;
  display:flex;
  padding:0 2rem;
  border-radius:.4rem;
  margin-right: .1rem;
}

}

@keyframes scale {
    0%{}
    100%{
      transform:scale(96%);
    }
    
  }

`