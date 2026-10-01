import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import CampusLife from "./components/sections/CampusLife";
import Admissions from "./components/sections/Admissions";
import ScrollProgress from "./components/ui/ScrollProgress";
import "./App.css";

function App() {
  return (
    <>
    <ScrollProgress />

      <Navbar />

      <main>
         <Hero />
         <About />
         <Academics />
         <CampusLife />
         <Admissions />
      </main>
      <Footer />
    </>
  );
}

export default App;