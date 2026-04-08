import Hero from "./(components)/Pages/Hero";
import About from "./(components)/Pages/About";
import Skills from "./(components)/Pages/Skills";
import Contact from "./(components)/Pages/Contact";
import Sidebar from "./(components)/Sidebar";
import ExperiencePreview from "./(components)/Pages/ExperiencePreview";
import EducationPreview from "./(components)/Pages/EducationPreview";

export default function Home() {
  return (
    <>
    <Sidebar/>
      <Hero />
      <About />
      <Skills />
      <EducationPreview/>
      <ExperiencePreview/>
      
      <Contact /> 
    </>
  );
}