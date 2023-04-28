import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useRef, useState} from 'react'
React.useLayoutEffect = React.useEffect
import { ArcherContainer, ArcherElement } from 'react-archer'
import Xarrow from "react-xarrows";


export default function Home() {
  const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"};
  const box1Ref = useRef(null);

  const [textAreaNo, setTextAreaNo] = useState(0);
  const [uploadNo, setUploadNo] = useState(0);
  const [arrowNo, setArrowNo] = useState(0);
  let arrayThing = [ {
    targetId : "element0",                    
    sourceAnchor: "bottom",
    targetAnchor : "top",
    style: {strokeDasharray:'5,5'},
  },
  {
    targetId : "element1",                    
    sourceAnchor: "bottom",
    targetAnchor : "top",
    style: {strokeDasharray:'5,5'},
  },
  {
    targetId : "element2",                    
    sourceAnchor: "bottom",
    targetAnchor : "top",
    style: {strokeDasharray:'5,5'},
  },];
  return (
    <>
      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-evenly", width: "50%" , textAlign:"center" ,alignItems:"center"}}>                  
        <ArcherContainer strokeColor="red">
            
              <ArcherElement
                id="root"
                relations={arrayThing}
                >
                  <div style={boxStyle}>hey</div>
                </ArcherElement>
            
            <div style={{height:"150px" , textAlign:"center" , display:"flex" ,justifyContent:"center" , alignItems:"center"}}>
              <button style={{width:"40px", marginLeft:"70px", height:"40px"}} onClick={() => setTextAreaNo(textAreaNo+1)}>+</button> 
            </div>       
            <div style={{display: "flex", justifyContent: "space-evenly", textAlign:"center"}}>
              {[...Array(textAreaNo)].map((a, i) => (
                <ArcherElement
                id={"element" + i}
                >
                  <div style={boxStyle}>element2</div>
                </ArcherElement>              
              ))}                            
              </div>                
        </ArcherContainer>
      </div>
    </>
  )
}


{/* <div id="existing-thread" ref={box1Ref} style={boxStyle}>hey</div>

<div style={{textAlign:"center"}}>
  <button style={{width:"40px", marginLeft:"70px"}} onClick={() => setTextAreaNo(textAreaNo+1)}>+</button> 
</div>
<div style={{display: "flex", justifyContent: "space-evenly", textAlign:"center"}}>
  {[...Array(textAreaNo)].map((a, i)=>(
    <>
      <p id={"thread"+i} style={boxStyle}>hey2</p>
      <Xarrow
        start="existing-thread" //can be react ref                    
        end={"thread"+i} //or an id
      />                                  
    </>
    ))}
    
    
</div> */}
