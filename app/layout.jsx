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
          <main className="app py-5 ">
            <Nav />
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
