import React from 'react';
import {BrowserRouter,Router, Routes,Route,Navigate} from 'react-router-dom'
import Navbar from '../Componenta/Navbar/index'
import {Container}  from './style'
import {navbar}  from '../utils/navbar'
import NotFound from '../Componenta/NotFound';

const Root= () => {
    
  return(
 <Container>
     <BrowserRouter>
          <Routes>
               <Route  element={<Navbar />}>
                  {
                       navbar.map(({path, id, Elements})=>(  <Route    key={id}  path={path}  element={<Elements/>}/> ))
                  }
               </Route>
                       <Route     path={'/'}  element={<Navigate  to='/home'/>}/>
                       <Route      path={'*'}  element={<NotFound />}/>
          </Routes>
       </BrowserRouter>
  </Container>
  );};
export default Root;
