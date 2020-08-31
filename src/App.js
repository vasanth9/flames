import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [boy,setBoy]=useState("");
  const [girl,setGirl]=useState("");
  const [message,setMessage]=useState("")
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
  
  const [isf,setIsf]=useState(true);
  const [isl,setIsl]=useState(true);
  const [isa,setIsa]=useState(true);
  const [ism,setIsm]=useState(true);
  const [ise,setIse]=useState(true);
  const [iss,setIss]=useState(true);
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
    var l=boy1.length;
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
let st="FLAMES"
let h=0;
for(let i=0;i<5;i++)
{

h=(l+h-1)%(st.length)
st=st.substr(0,h)+""+st.substr(h+1);


} 
  
  if(st==="F")
  {
  setIsf(true);
  setIsl(false);
  setIsa(false);
  setIsm(false);
  setIse(false);
  setIss(false);
  setMessage("you both are Friends");
  } 
  else if(st==="L")
  {
  setIsf(false);
  setIsl(true);
  setIsa(false);
  setIsm(false);
  setIse(false);
  setIss(false);
  setMessage("you both are Lovers");
  } 
  else if(st==="A")
  {
  setIsf(false);
  setIsl(false);
  setIsa(true);
  setIsm(false);
  setIse(false);
  setIss(false);
  setMessage("you are affectionate to each other");
  } 
   else if(st==="M")
  {
  setIsf(false);
  setIsl(false);
  setIsa(false);
  setIsm(true);
  setIse(false);
  setIss(false);
  setMessage("you both get married....");
  } 
  
   else if(st==="E")
  {
  setIsf(false);
  setIsl(false);
  setIsm(false);
  setIsa(false);
  setIse(true);
  setIss(false);
  setMessage("you both are enemies");
  } 
   else if(st==="S")
  {
  setIsf(false);
  setIsl(false);
  setIsm(false);
  setIse(false);
  setIsa(false);
  setIss(true);
  setMessage("you are sibilings to each other");
  } 
  
  //console.log(boy,girl)
  }

  return (
    <div className="container col">
      <br/><br/>
      <h1 className="text-center">FLAMES</h1>
      <br/><br/>
      <form className="form">
        <center>
         <div className="container form-contol row center">
       
       <span className="form-control  col-3 "><h5 >Name1:</h5></span>
          <span className=" col-3" />
          <span className="form-control col-3 "><h5>Name2:</h5></span>
          
        </div>
        <div className="container form-contol row center">
       
       
          <input className="form-control col-6" onChange={handleBoy}/>
          
          <input className="form-control col-6" onChange={handleGirl}/>
        </div>
        <br/><br/>
         
        <button className="btn-success form-control col-3" onClick={submit}>Submit</button>
        </center>

      </form>
      <br/>
      <center>
      <h3>{message}</h3>
      </center>
      <br/>
      <center  >
      
      <div className="container row" style={{'font-size':'7em'}}>
      
     <span className=" col-2" style={isf?stylef:stylew}>F</span>
     <span className=" col-2" style={isl?stylel:stylew}>L</span>
     <span className=" col-2" style={isa?stylea:stylew}>A</span>
     <span className=" col-2" style={ism?stylem:stylew}>M</span>
     <span className=" col-2" style={ise?stylee:stylew}>E</span>
     <span className=" col-2" style={iss?styles:stylew}>S</span>
     
     </div>
     
     </center>
    </div>
  );
}

export default App;
