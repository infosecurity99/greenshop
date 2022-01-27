import React from 'react';
import { useLocation } from 'react-router-dom';

const  Genirik = () => {
 const location=useLocation();
  return(
    <div>
          <h1>
               salom men Cenirik  { location.pathname}
         </h1>
   </div>
  )
};

export default  Genirik;
