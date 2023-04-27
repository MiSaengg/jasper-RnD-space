import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useRef } from 'react'
React.useLayoutEffect = React.useEffect
import Xarrow from 'react-xarrows'


export default function Home() {
  const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px", margin :"40px"};
  const box1Ref = useRef(null);
  return (
    <>
      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-evenly", width: "50%"}}>
            <div ref={box1Ref} style={boxStyle}>hey</div>
            <p id="elem2" style={boxStyle}>hey2</p>
            <Xarrow
                start={box1Ref} //can be react ref
                end="elem2" //or an id
            />
        </div>
    </>
  )
}
