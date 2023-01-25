import About from "@/components/AboutSection/About";
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
