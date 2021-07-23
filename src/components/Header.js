import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    padding: 2vh 4vw;
`

const HeaderLeft = styled.div`
    width: 40%;
`

const HeaderRight = styled.nav`
    width: 30%;
    justify-content: flex-end;

    ul{
       display:flex;
       justify-content:flex-end;
       list-style:none; 
    }

    li{
        border: 1px solid black;
        padding: 1vh 2vw;
    }
`

export default function Header(){

   return(
    <Container>
     <HeaderLeft>
         <h1>Lambda Eats</h1>
     </HeaderLeft>
     <HeaderRight>
         <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/help"><li>Help</li></Link>
         </ul>
     </HeaderRight>
    </Container>
   ) 
}