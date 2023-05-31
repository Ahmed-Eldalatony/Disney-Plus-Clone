import React from 'react'
import styled from 'styled-components'
import videoBg from '../../public/videos/disney-plus-opening.mp4'

function Viewers() {
  return (
    // ! Who this is so stupid every viewer should be a component man or some how dynamic
    <StyledViewer>
      <div className="overlay h"></div>
    <div>
        <img src="../../public/images/viewers-disney.png" alt="" />
    <video autoPlay loop muted  >
        <source src={videoBg} type='video/mp4' />
      </video>

    </div>
    <div>
        <img src="../../public/images/viewers-pixar.png" alt="" />
    <video autoPlay loop muted  >

        <source src={videoBg} type='video/mp4' />
      </video>

    </div>
    <div>
        <img src="../../public/images/viewers-marvel.png" alt="" />
    <video autoPlay loop muted  >
        <source src={videoBg} type='video/mp4' />

      </video>

    </div>
    <div>
        <img src="../../public/images/viewers-starwars.png " alt="" />
    <video autoPlay loop muted  >
        <source src={videoBg} type='video/mp4' />
      </video>
      
    </div>
    <div>
    <img src="../../public/images/viewers-national.png " alt="" />
    <video autoPlay loop muted  >
        <source src={videoBg} type='video/mp4' />
      </video>
      
    </div>
  
    </StyledViewer>
  )
}

export default Viewers
const StyledViewer= styled.div`

  position: relative;

    margin-top:63%;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
    gap: 3rem;
    padding: 5rem;
    /*! I will prefer accoridon*/
    .overlay.h{
      width: 100%;
      background-image:linear-gradient(to top,rgba(13,13,13,1)10% ,
      rgba(13,13,13,85)30%,
      rgba(13,13,13,0)100% );
      
      min-height: 42rem;
      position:absolute ;
      bottom: 15rem;
    }
div:not(.overlay.h){
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background: #1C1F2A ;
  aspect-ratio: 16/9;
  border-radius: 5px;
  overflow: hidden;
  transition: all 250ms;
  outline: 3px solid rgba(68, 71, 82, 0.85);
  box-shadow:rgba(0,0,0,0.69) 0px 26px 30px -10px,rgba(0,0,0,0.73) 0px 16px 10px -10px ;

  :hover{
    transform: scale(107%);
    outline:3px solid #eee ;
   box-shadow: rgba(0,0,0,0.8) 0px 40px 58px -16px,rgba(0,0,0,0.72) 0px 30px 22px -10px;
  }
    img{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
    }
    video{
    position: absolute;
    opacity: 0;
    width: 100%;
    transition: opacity 250ms;
      :hover{
        opacity: 1;
      }
    }
  

 
}


  /*
  -main-shadow: rgba(0,0,0,0.69) 0px 26px 30px -10px,rgba(0,0,0,0.73) 0px 16px 10px -10px;
    --main-shadow-hover: rgba(0,0,0,0.8) 0px 40px 58px -16px,rgba(0,0,0,0.72) 0px 30px 22px -10px;
    --card-background: linear-gradient(#30323e,#1e1f2a) 0% 0%/cover;  */
  
  
    


`