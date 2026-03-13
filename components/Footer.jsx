export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div className="footer-left">
          <h3>Art of Quism</h3>
          <p>
            A contemplative space where art reflects consciousness,
            nature, and inner awareness.
          </p>
        </div>

        <div className="footer-center">
          <a href="/en">Home</a>
          <a href="/en/museum">Museum</a>
          <a href="/en/gallery">Gallery</a>
          <a href="/en/art-culture">Art & Culture</a>
          <a href="/en/secrets">Secrets</a>
          <a href="/en/founder">Founder</a>
        </div>

        <div className="footer-right">
          <p>Email: contact@artofquism.com</p>
          <p>© {new Date().getFullYear()} Art of Quism</p>
        </div>

      </div>

    </footer>
  );
}