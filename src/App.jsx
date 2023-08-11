import React, { useState } from 'react';
import ReactDOM from 'react-dom';
  import './index.css'

function App(){

           let cTime=new Date().toLocaleTimeString();
          let [time,updateTime]=useState(cTime);

            setInterval(myFun,1000);

               function myFun(){
                 time=new Date().toLocaleTimeString();
                   updateTime(time);
               }

      return (
        <>

            <div className='outer-box'>

                 <div className='inner-box'>
                 <h1 className='heading'>{cTime}</h1>
                 </div>
                 
            </div>
           
        </>
      );

}

  export default App;
 