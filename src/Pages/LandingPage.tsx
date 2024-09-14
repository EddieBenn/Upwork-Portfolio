import Banner from "../Components/Banner/Banner"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import Navigation from "../Components/Navbar/Navbar"
import Projects from "../Components/Projects/Projects"
import Skills from "../Components/Skills/Skills"
import Testimonies from "../Components/Testimonies/Testimonies"


const LandingPage = () => {

    return (
        <>
        <Navigation />
        <Banner />
        <Skills />
        <Projects />
        <Testimonies />
        <Contact />
        <Footer />
        </>
    )
}

export default LandingPage