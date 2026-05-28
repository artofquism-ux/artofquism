"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavbar({ items = [], base = "", lang }) {
  const pathname = usePathname();
  const safeLang = lang || "en";

  return (
    <div className="sub-nav">
      {items.map((item) => {
        const href = `/${safeLang}/${base}/${item.slug}`;

     const active =
  href === `/${lang}`
    ? pathname === `/${lang}`
    : pathname.startsWith(href);

        return (
          <Link
            key={item.slug}
            href={href}
            className={active ? "active nav-link" : "nav-link"}
          >
            {item.title.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}