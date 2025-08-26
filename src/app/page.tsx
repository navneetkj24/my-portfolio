import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="pt-20"> {/* avoids overlap with fixed navbar */}
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
