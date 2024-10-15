import React,{Suspense}from 'react'
import Lazy from './Lazy';

const Lazyloading =React.lazy(()=>import("./Lazy"));
const Lazing=()=>{
 return(
    <div>
        <h1>LAZY LOAdING.....</h1>
        <Suspense fallback={<div>loading.....</div>}> <Lazy/></Suspense>
    </div>
 )
}
export default Lazyloading;
