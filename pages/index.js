import Background from "../components/background";
import Social from "../components/social";
import Header from "../components/header";
import OtherProjects from "../components/other-project";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import Experience from "../components/experience";

export default function Home() {
  return (
    <>
      <Header />
      <Background />
      <Experience/>
      <Skills />
      <Projects />
      <OtherProjects />
      <Blogs />
      <Social />
      <Footer />
    </>
  )
}
