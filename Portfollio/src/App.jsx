import Hero from "./Sections/Hero.jsx";
import ShowcaseSection from "./Sections/ShowcaseSection.jsx";
import NavBar from "./Components/NavBar.jsx";
import LogoSection from './Sections/LogoSection.jsx';
import FeatureCards from './Sections/FeatureCards.jsx';
import ExperienceSection from "./Sections/ExperienceSection.jsx";
import TechStack from "./Sections/TechStack.jsx";
import Testimonials from "./Sections/Testimonials.jsx";
import Contact from "./Sections/Contact.jsx";
import Footer from "./Sections/Footer.jsx";
import About from "./Sections/About.jsx";

import { Canvas } from '@react-three/fiber';
import Particles from "../src/Components/Hero models/Particles.jsx"





const App = () => {
    return (
        <>
       
            <NavBar />
            <Hero /> 
            <About />
            <ShowcaseSection /> 
            <FeatureCards />
            <ExperienceSection />
            {/* <LogoSection /> */}
            <TechStack />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
            

         {/* <Canvas
        style={{
          position: "absolute",
          top: 1000,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <Particles count={100} />
        
      </Canvas>   */}
       
        </>
    )
}

export default App;