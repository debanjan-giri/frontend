import React from "react";

// Layout component with navbar and footer
export function Pages() {
  return (
    <LayoutDesign>
      <div>
        <p>This is the main content area</p>
      </div>
    </LayoutDesign>
  );
}

function LayoutDesign({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ height: "85vh" }}>{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <h1>Nav</h1>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}
