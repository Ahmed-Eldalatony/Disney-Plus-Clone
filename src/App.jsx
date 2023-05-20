import Header from './Components/Header'
import Home from './Components/Home';
import  StyledComponent  from 'styled-components'
import axios from 'axios';
import Viewers from './Components/Viewers';
import { useState,useEffect } from 'react'
import { getApiConfigurationUrl } from './store/homeSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchDataApi } from '../api';

function App() {
  const dispatch= useDispatch()
  const {url} = useSelector(state=> state.home)
  console.log(url)




  useEffect(() => {
    apiTesting()
  },[])

  const apiTesting= ()=>{
    fetchDataApi("/movie/popular").then((res)=>{
      dispatch(getApiConfigurationUrl(res))
      console.log(res)

  })
  
  
}


  return (
    <>
    <Header/>
    {/* make a div with an bakcgroun image and a video absoloute chech if video is appearing behind the imaged */}
    <div className='container'>
    <Viewers/>
 <Home  homeUrl={url} /> 
    </div>
    </>
  )
  }

export default App
