import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body lang="en">
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
