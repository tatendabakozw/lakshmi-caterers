import Footer from "@components/navigation/Footer";
import Navbar from "@components/navigation/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GeneralLayout({ children }: Props) {
  return (
    <div className="antialiased">
      <div className="nav">
        <Navbar />
      </div>
      {children}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default GeneralLayout;
