import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Netflix Preview
        </p>
      </footer>
    </>
  );
}

export default Footer;
