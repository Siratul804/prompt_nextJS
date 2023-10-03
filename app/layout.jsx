import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Footer } from "@components/Footer";

export const metadata = {
  title: "EZprompt",
  description: "Discover & Share AI Prompts",
  image: "/assets/images/meta.PNG",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="" />
          </div>

          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
