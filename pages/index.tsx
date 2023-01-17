import About from "@/components/AboutSection/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/HeroSection/Header/Header";
import IconsSection from "@/components/IconsSection/IconsSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <IconsSection />
      <About />
    </Layout>
  );
}
