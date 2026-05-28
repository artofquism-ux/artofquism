


import Link from "next/link";


export default function NavigationGallery({
  items,
  lang,
  columns = 5,
  mode = "view"   // 👈 default
}) {
  return (
    <div
      className="gallery-fixed"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
      }}
    >
      {items.map((item, i) => {
        const Card = (
          <>
            <div className="card-image">
              <img src={item.image || item.img} alt={item.title} />
            </div>
            <div className="card-caption">{item.title}</div>
          </>
        );

        // 🔴 HOME → LINK MODE
        if (mode === "link") {
          return (
            <a
              key={i}
              href={`/${lang}/${item.slug}`}
              className="card"
            >
              {Card}
            </a>
          );
        }

        // 🟢 OTHER → VIEW / LIGHTBOX MODE
        return (
          <div
            key={i}
            className="card"
             onClick={() => setActive(i)}
          >
            {Card}
          </div>
        );
      })}
    </div>
  );
}