
//import './App.css';
import React, { useState,useEffect } from 'react';

//let count=0;



const App = () =>{
  //const state = useState();
  const [num,setNum] = useState(0);
  const [nums,setNums]= useState(0)           // Destructuring of Array 

  useEffect(()=>{
    alert("I am clicked");
  });
  return(
    <>
    <button onClick={()=>{setNum(num+1);
    }}
    >
      Click Me {num}
      </button>
      <br/>
      <button onClick={()=>{setNums(nums+1);
    }}
    >
      Click Me {nums}
      </button>

    </>
  );
};

export default App;
