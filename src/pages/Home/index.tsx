import { Button } from "@/components/ui/button"
import { Download, GithubIcon } from "lucide-react"
import { NpmPlain, LinkedinPlain } from 'devicons-react'
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
              Resumé <Download />
            </Button>
          </li>
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open('https://github.com/cedriccastro99')}>
              <GithubIcon />
            </Button>
          </li>
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open('https://www.linkedin.com/in/cedric-castro/')}>
              <LinkedinPlain />
            </Button>
          </li>
          <li>
            <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => window.open('https://www.npmjs.com/~cedriccastro')}>
              <NpmPlain />
            </Button>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Home