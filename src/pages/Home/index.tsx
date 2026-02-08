import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"
import ResumePdf from "/RESUME_CEDRIC_CASTRO.pdf"

const Home = () => {
  return (
    <section className="py-5">
      <header>
        <h1 className="text-4xl font-bold mb-4">
          hi, i'm
          <br />
          <span className="text-5xl">cedric castro</span>
        </h1>
      </header>
      <section>
        <p className="text-md">
          A Full-stack developer specializing in high-quality, performance-optimized applications, with experience leading teams, maintaining complex codebases, and building scalable solutions using JavaScript, TypeScript, React, and Node.js.
        </p>
        <ul className="mt-4 flex gap-2">
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open(ResumePdf, '_blank', 'noopener,noreferrer')}>
              Resume <Download />
            </Button>
          </li>
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open('https://github.com/cedriccastro99')}>
              <Github />
            </Button>
          </li>
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open('https://www.linkedin.com/in/cedric-castro/')}>
              <Linkedin />
            </Button>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Home