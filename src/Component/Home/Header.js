import React from 'react'
import styled from 'styled-components'
import MainImg from '../../img/image 10.png'
import trangle1 from '../../img/Polygon 2.png'
import trangle2 from '../../img/Polygon 3.png'
import logoCenter from '../../img/image 2.png'



import NavBar from './NavBar'
const Header = () => {
  return (
    <HeaderStyle>
        <NavBar />
        
        <div className='main-header'>
            <div className='main-img'>
               <img  src={MainImg} /> 
            </div>
            <h1>Everything Is Too Easy !</h1>
            <div className='logo-img'>
                 <img  src={logoCenter} />
            </div>
            <div className="trangle1">
                <img  src={trangle1}  />
            </div>
            <div className="trangle2" >
             <img  src={trangle2} />
            </div>
            <button>Read More</button>
            

        </div>
    
    </HeaderStyle>
  )
}
const HeaderStyle = styled.header`
.main-header{
   position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .main-img{
        position: relative;
        img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

    }

    }
    h1{
        width: 30%;
        position: absolute;
        top:50px ;
        left: 30%;
        color: white;
        font-size: 50px;
        letter-spacing: 5px;
        line-height: 70px;

    }
    .logo-img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%) ;
        background-color: white;
        padding: 60px 15px;
        border-radius:50% ;
    }
    .square1{
        position: absolute;
        bottom:  30%;
        left: 280px;
    }
    .trangle1{
        position: absolute;
        z-index:-1;
        left: 0px;
    }
    .trangle2{
        overflow: hidden;
        position: absolute;
        top: 250px;
        right: -50px;
        z-index: -1;
    }
    button{
        all: unset;
        position: absolute;
        color: white;
        font-size: 20px;
        left: 50%;
        transform:translateX(-50%);
        bottom: 100px;
        background-color: var(--secound-color);
        padding:10px 40px ;
        border-radius: 8px;
        color: var(--primary-color);
        cursor: pointer;

    }

}






  


`
export default Header