import Contact from "@/pages/Contact"
import Experience from "@/pages/Experience"
import Home from "@/pages/Home"
import Layout from "@/components/layout/Layout"
import Projects from "@/pages/Projects"
import Skills from "@/pages/Skills"
import { ThemeFAB } from "./components/fab"
 
function App() {
  return (
    <>
      <ThemeFAB />
      <Layout>
        <Home />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </Layout>
    </>
  )
}
 
export default App