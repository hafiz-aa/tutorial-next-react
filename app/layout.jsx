import "@styles/globals.css";

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
      </body>
      <main className="app">{children}</main>
    </html>
  );
};

export default RootLayout;
