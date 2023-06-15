import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Img from './lazy-load-img'

// 16=> animation , 10749=> !!romance, 10751=> family
const MoviesList = (props) => {
  const {slider}=props
  const {url} = useSelector(state => state.home)
  const [counter,setCounter]= useState(0)
  
    const [disneyMovies,setDisneyMovies]= useState()
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie?query=disney&api_key=d1d7c38eea87677279fb8a43b4e2ddca')
        .then(res=> {
       return  res.data.results
        })
        .then(res=>{
          const moviesArray=[]
            res.map((Dmovies)=>{
                if(Dmovies.genre_ids.includes(16)){
                  moviesArray.push(Dmovies)
                }
            })
            setDisneyMovies(moviesArray)
        } )

    },[]) 
      useEffect(()=>{
        setIndex()
      },[counter])
    function setIndex(){ 
      counter <= -2? setCounter(0): ""; 
      counter !== 1?
      document.documentElement.style.setProperty(slider,counter ): "";
      counter ===1? setCounter(0):"";
    } 
  return (
    <>
      <MoviesListcomp>
        <h2  > Disney Originals</h2> 
        <div className="carousel">
          <div className="sm-shadow-r"></div>
          <div className="sm-shadow-l"></div>
          <div className="left-handler" onClick={()=> setCounter( counter +1)}> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
           </div>
          <div className="right-handler" onClick={()=> setCounter( counter -1)} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
          </div>
        <div  style={{transform: `translate(calc(${counter} * 80%) )`}} className={`moviesCont`} >
      {disneyMovies&& disneyMovies.map((movie)=>{
        const poster= url.poster + movie?.poster_path
        return(
          <div className='movieCont'>
          <Img src={poster}/>
          </div>
        )
        
      })}
      </div>
      </div>
      </MoviesListcomp>
    </>
  )
}

export default MoviesList;
 const MoviesListcomp= styled.div`
 position: relative;
 min-width: calc(100% + 2rem);
 max-width: 100%;
 /* transform: translateX(-2rem); */
 background-color: rgb(13, 13, 13);
 transform: translateX(-2rem);
 padding-bottom: 5rem;
 .moviesCont{
   display: flex;
   gap: .6rem;
   position: relative;
   width: 100%;
  }
  .movieCont{
    min-width: 20rem;
    max-width: 20rem;
    border-radius:.5rem;
    overflow: hidden;
    max-height: 28.5rem;
  }
  /*! How to make a carousel that slides by the number of elements we have 
   so that it stops slidding when no more elements */
  .carousel{
    position: relative;
    z-index: 100;
    max-width:fit-content !important;
    overflow: hidden;
  }
  .carousel:hover .right-handler,
  .carousel:hover .left-handler{
    opacity: 1;
  }

  .sm-shadow-l,
  .sm-shadow-r {
    position: absolute;
    right: 0;
    width: 5.5rem;
    height: 100%;
    background-image: linear-gradient(to left, rgba(12, 12, 12,.9),rgba(12, 12, 12,.6)15% ,rgba(12,12,12,.4)60%, rgba(255,255,12,0));
    z-index: 110;
  }
  .sm-shadow-r{
    left: 0;
    background-image: linear-gradient(to right, rgba(12, 12, 12,.9),rgba(12, 12, 12,.6)15% ,rgba(12,12,12,.4)60%, rgba(255,255,12,0));
  }
.left-handler,
.right-handler{
    position: absolute;
    background-image: linear-gradient(to right, rgba(12, 12, 12,.9),rgba(12, 12, 12,.85)25% ,rgba(12,12,12,.6)50%, rgba(255,255,12,0));
    width:5.5rem;
    z-index: 120;
    min-height: 100%;
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    width: 5rem;
    justify-content: center;
    opacity: 0;
    transition: all .25s ;
    svg{
      width:2.5rem;
      fill:white;
      transform:
      translate(-50%) ;
      z-index: 2000;

    }
  }

.left-handler{
  left:0;

  svg{
    transform:
      translate(-50%) rotateY(180deg);
  }
}
.right-handler{
  background-image: linear-gradient(to left, rgba(12, 12, 12,.9),rgba(12, 12, 12,.85)25% ,rgba(12,12,12,.6)50%, rgba(255,255,12,0));
  right:0;
  svg{
    transform: translate(50%);
  }

}
  .moviesCont{
    max-width: 100%;
    position: relative;
    z-index: 100;
    max-width:fit-content;
    transition: all .3s;
  }

 h2{
  font-size: 2.4rem;
  font-weight: 600;
  color: #D3D3D4;
  padding: 0;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
 }
 p{
  color:white;
 }
 Img {
   width:100%;
   height:100% ;
  }
`