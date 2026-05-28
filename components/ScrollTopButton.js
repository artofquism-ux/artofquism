"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {

  const [show, setShow] = useState(false);

 useEffect(() => {
  setShow(true);
 
  const handleScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop;

  setShow(scrollTop > 300);
};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 return (
<button
  className={`scroll-top ${show ? "show" : ""}`}
  onClick={scrollToTop}
  aria-label="Scroll to top"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12z"/>
</svg>
</button>
);
}