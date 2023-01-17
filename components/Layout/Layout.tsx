import Footer from "../Footer/Footer";
import Navbar from "../HeroSection/Navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
