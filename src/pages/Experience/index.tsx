import { getDuration } from "@/lib/utils";
import Timeline from "@/components/timeline"

const Experience = () => {

  const experiences = [
    {
      title: "IT Software Developer",
      company: "Medimpact International",
      period: `Nov 2025 • Present (${getDuration(new Date("2025-11-01"))})`,
      description: "",
      technologies: ["React", "Angular", "JavaScript", "TypeScript", "NodeJs", "ExpressJs", "Docker", "PostgreSQL", "MySQL", "GrahpQL"],
    },
    {
      title: "IT Software Developer",
      company: "KMC Solutions Inc.",
      period: `Mar 2025 • Nov 2025 (${getDuration(new Date("2025-03-01"), new Date("2025-11-01"))})`,
      description:"",
      technologies: ["React", "Angular", "JavaScript", "TypeScript", "NodeJs", "ExpressJs", "Docker", "PostgreSQL", "MySQL", "GrahpQL"],
    },
    {
      title: "Full Stack Developer",
      company: "DNA Micro Inc.",
      period: `Mar 2023 • Mar 2025 (${getDuration(new Date("2022-09-01"), new Date("2025-03-01"))})`,
      description: "",
      technologies: ["React", "JavaScript", "TypeScript", "Webpack", "Tailwind", "NodeJs", "ExpressJs", "Docker", "Restify", "RethinkDB", "ElasticSearch", "NestJs", "PHP", "Linux"],
    },
  ];


  return (
    <section>
      <h5 className='font-bold border-b-1 py-2'>experience</h5>
      <Timeline experiences={experiences} />
    </section>
  )
}

export default Experience