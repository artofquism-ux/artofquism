"use client";

import {useEffect,useState} from "react";

export default function PageLoader(){

const [hide,setHide]=useState(false);

useEffect(()=>{
const t=setTimeout(()=>setHide(true),700);
return()=>clearTimeout(t);
},[]);

return(
<div className={`page-loader ${hide?"hide":""}`}>
<div className="loader-text">LOADING</div>
</div>
);

}