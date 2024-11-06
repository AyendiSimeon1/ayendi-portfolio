import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsShowcase from "@/components/Showcase";
import ProjectsAndExperience from "@/components/Projects";
import ContactSection from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ToolsShowcase />
      <ProjectsAndExperience />
      <ContactSection />
      <footer>
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={30}
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
          }}
        />
      </footer>
      
    </div>
  );
}
