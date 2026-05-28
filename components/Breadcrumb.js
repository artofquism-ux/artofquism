import Link from "next/link";

export default function Breadcrumb({ lang, collection, slug, title }) {
  return (
    <div className="breadcrumb">
      
      <Link href={`/${lang}`}>Home</Link>

      <span> / </span>

      <Link href={`/${lang}/${collection}`}>
        {collection.toUpperCase()}
      </Link>

      {slug && (
        <>
          <span> / </span>
          <span className="current">
            {title || slug.toUpperCase()}
          </span>
        </>
      )}
      
    </div>
  );
}