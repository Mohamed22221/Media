import React from 'react'
import Container from '@mui/material/Container';
import styled from 'styled-components'
import logo from '../../img/022.png'
const NavBar = () => {
  return (
   
  
 <MainHeader> 
     <div className='main-nav'>
     <Container maxWidth="xl" > 
       <div className='nav'>

       
        <div className='logo-nav'>
        <img src={logo} alt='logo' className='logo' />
        </div>
         <ul>
        <li>Home</li>
        <li>Our Team</li>
        <li>SerVices</li>
        <li>Contact</li>
         </ul>
     </div>
   </Container>
   </div>
</MainHeader>

  )
}

const MainHeader = styled.nav`
.main-nav{

background-color: black;
color: white;
.nav{
 display: flex;
justify-content: space-between;
align-items: center;
}
.logo-nav{
    cursor: pointer;
    .logo{
      width:130px
    }
}
ul{
    display: flex;
    height: 100%;
    li{
        padding: 15px;
        cursor: pointer;
      
    }
}
}

`
export default NavBar