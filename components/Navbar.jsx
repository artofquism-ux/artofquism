"use client";

import Link from "next/link";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(){

const pathname = usePathname();
const [open,setOpen]=useState(false);
const [shadow,setShadow]=useState(false);

const active=(path)=>pathname===path?"active":"";

/* scroll shadow */
useEffect(()=>{
const handleScroll=()=>setShadow(window.scrollY>10);
window.addEventListener("scroll",handleScroll);
return()=>window.removeEventListener("scroll",handleScroll);
},[]);

/* mobile close on route change */
useEffect(()=>setOpen(false),[pathname]);

return(

<header className={`navbar ${shadow?"nav-shadow":""}`}>

<div className="nav-inner">

<Link href="/en" className="nav-logo">ART OF QUISM</Link>

<nav className={`nav-menu ${open?"open":""}`}>

<Link href="/en" className={active("/en")}>Home</Link>

<div className="dropdown">

<span className="drop-title">Museum</span>

<div className="dropdown-menu">
<Link href="/en/museum">Overview</Link>
<Link href="/en/museum/life">Life</Link>
<Link href="/en/museum/nature">Nature</Link>
<Link href="/en/museum/art">Art</Link>
<Link href="/en/museum/culture">Culture</Link>
</div>

</div>

<Link href="/en/gallery" className={active("/en/gallery")}>Gallery</Link>

<Link href="/en/art-culture" className={active("/en/art-culture")}>Art & Culture</Link>

<Link href="/en/secrets" className={active("/en/secrets")}>Secrets</Link>

<Link href="/en/founder" className={active("/en/founder")}>Founder</Link>

</nav>

<button className="nav-toggle" onClick={()=>setOpen(!open)}>☰</button>

</div>

</header>

);

}