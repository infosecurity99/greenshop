import styled from "styled-components"
import {NavLink} from 'react-router-dom'

export  const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
width: 100%;
height: 78px;
border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`

export const LogoWrapper=styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
   
    color: #46A358;
`
export const Logo=styled(`img`)`
height: 50px;
width: 50px;
margin-right: 6px;
background-position: center;
background-size: cover;
cursor: pointer;
`

export const LinkGroup=styled.div`
display: flex;
align-items: center;
flex-direction: row;
`

export const ItemsGroup=styled.div`
display: flex;
`

export const Link=styled(NavLink)`
text-decoration: none;
font-family: Cera Pro;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 20px;
color:${({active})=>(active? '#46A358' : '#3D3D3D')};
margin: 0px 25px;
`