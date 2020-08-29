import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [boy,setBoy]=useState("");
  const [girl,setGirl]=useState("");

  const stylef={
    backgroundColor:"red"
  }
  const stylel={
    backgroundColor:"orange"
  }
  const stylea={
    backgroundColor:"yellow"
  }
  const stylem={
    backgroundColor:"green"
  }
  const stylee={
    backgroundColor:"blue"
  }
  const styles={
    backgroundColor:"indigo"
  }
  const stylew={
    backgroundColor:"white"
  }
  const [isred,setIsred]=useState(true);
  function handleBoy(evt){
    setBoy(evt.target.value);
   }
   function handleGirl(evt){
    setGirl(evt.target.value);
   }
   function submit(evt){
    evt.preventDefault();
    var boy1=boy;
    var girl1=girl;
    var l=boy1.length
    for(let x in boy1){
      //console.log(boy1[x])
      const z=girl1.search(boy1[x])
      if(z!==-1)
      {l--;
        //boy1=boy1.substr(0,x)+""+boy1.substr(x+1);
       girl1=girl1.substr(0,z)+""+girl1.substr(z+1);
      }
      
      //console.log(boy1," ",girl1)
      //console.log(len+girl1.length)
    }
    l=l+girl1.length
  console.log(l)
  
    
  
  //console.log(boy,girl)
  }
  function fr(evt){
    for(let i=0;i<10;i++){ for(let k=0;k<10000;k++)
      {for(let j=0;j<10000;j++)
        {}} ft();}
  
  }
  function ft(){
 
    
    setIsred(!isred);
    for(let k=0;k<10000;k++)
      {for(let j=0;j<10000;j++)
        {}}
   console.log(isred)
  }
  return (
    <div className="container col">
      <br/><br/>
      <h1 className="text-center">FLAMES</h1>
      <br/><br/>
      <form className="form">
        <center>
        <div className="container form-contol row center">
       
       <span className="form-control  col-1 "><h5 >Boy:</h5></span>
          <input className="form-control col-5" onChange={handleBoy}/>
          <span className="form-control col-1 "><h5>Girl:</h5></span>
          <input className="form-control col-5" onChange={handleGirl}/>
        </div>
        <br/><br/>
         
        <button className="btn-success form-control col-3" onClick={submit}>Submit</button>
        </center>

      </form>
      <br/><br/>
      <center style={{fontSize:130}} >
      <div className="container row">
      
     <span className=" col-2" style={isred?stylef:stylew}>F</span>
     <span className=" col-2" style={stylel}>L</span>
     <span className=" col-2" style={stylea}>A</span>
     <span className=" col-2" style={stylem}>M</span>
     <span className=" col-2" style={stylee}>E</span>
     <span className=" col-2" style={styles}>S</span>
     
     </div>
     <button onClick={fr}>Toggle</button>
     </center>
    </div>
  );
}

export default App;
