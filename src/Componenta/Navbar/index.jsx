import React,{useState,useEffect} from 'react';
import  {navbar}  from '../../utils/navbar';
import {Container,LogoWrapper,Logo,LinkGroup, ItemsGroup,Link} from './style'
import logo from '../../assets/imgs/logo.png'
import {Outlet ,useNavigate,useLocation} from "react-router-dom";
const Navbar = () => {

   

    const [active, setActive]=useState('/home');
    const navigate=useNavigate();
    const location=useLocation();
   

    useEffect(() => {
      setActive(location?.pathname)
    }, [location?.pathname]); 

  return (
    <div>
  <Container>

         <LogoWrapper  onClick={()=>navigate('/home')}>
                <Logo   src={logo}  alt="logo compony"/>Greenshop
         </LogoWrapper>

         <LinkGroup>
             {
                  navbar.map((value)=>(<Link key={value.id}  active={active===value.path}   onClick={()=>setActive(value.path)}  to={value.path}> {value.title} </Link> ))
              }
         </LinkGroup>

        <ItemsGroup>
                  item
       </ItemsGroup>
</Container>

<Outlet />

  </div>
  );
};

export default Navbar;
