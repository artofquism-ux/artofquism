"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {

const { lang } = useParams();


// ✅ 1. STATE (FIRST)
const [open,setOpen] = useState(false);
const [museum,setMuseum] = useState(false);
const [gallery,setGallery] = useState(false);
const [drop,setDrop] = useState(false); // founder


// ✅ 2. TOGGLE (SECOND)

const toggleMuseum = ()=>{
setMuseum(!museum);
setGallery(false);
setDrop(false);
};

const toggleGallery = ()=>{
setGallery(!gallery);
setMuseum(false);
setDrop(false);
};

const toggleDrop = ()=>{
setDrop(!drop);
setMuseum(false);
setGallery(false);
};


// ✅ 3. CLICK OUTSIDE (OPTIONAL)

useEffect(()=>{
const close = ()=>{
setMuseum(false);
setGallery(false);
setDrop(false);
};
document.addEventListener("click", close);
return ()=> document.removeEventListener("click", close);
},[]);


// ✅ 4. RETURN (LAST)



return (
 
 
<header className="header"> 


 

{/* LOGO */}
<Link href="/" className="logo">
Art of Quism
</Link>

{/* NAV */}
<nav className="main-nav">

<Link href="/">HOME</Link>

<Link href="/museum">MUSEUM</Link>

<Link href="/en/gallery">GALLERY</Link>
<Link href="/art-culture">ART & CULTURE</Link>
<Link href="/secrets">SECRETS</Link>

<Link href="/founder">FOUNDER</Link>

</nav>

{/* LANG */}
<div className="lang-switch">
<button>EN</button>
<button>BN</button>
<button>HI</button>
<button>ES</button>
</div>

</header>

);

}

 