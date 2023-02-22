import About from "@/components/AboutSection/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/HeroSection/Header/Header";
import HomeNavbar from "@/components/HeroSection/Navbar/HomeNavbar";
import IconsSection from "@/components/IconsSection/IconsSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Header />
      <HomeNavbar />
      <IconsSection />
      <About />
      <Footer />
    </>
  );
}
