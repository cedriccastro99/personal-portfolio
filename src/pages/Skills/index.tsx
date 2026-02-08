import { Badge } from '@/components/ui/badge'
import {
  JavascriptOriginal as JavascriptIcon,
  TypescriptOriginal as TypescriptIcon,
  ReactOriginal as ReactIcon,
  ReduxOriginal as ReduxIcon,
  PhpOriginal as PhpIcon,
  JqueryOriginal as JqueryIcon,
  NodejsOriginal as NodejsIcon,
  ExpressOriginal as ExpressIcon,
  NestjsOriginal as NestjsIcon,
  GraphqlPlain as GraphqlIcon,
  TailwindcssOriginal as TailwindIcon,
  BootstrapOriginal as BootstrapIcon,
  PostgresqlOriginal as PostgresqlIcon,
  MysqlOriginal as MysqlIcon,
  MongodbOriginal as MongodbIcon,
  COriginal as CIcon,
  LinuxOriginal as LinuxIcon,
  Html5Original as HtmlIcon,
  Css3Original as CssIcon,
  DockerOriginal as DockerIcon,
  GitOriginal as GitIcon,
  GithubOriginal as GithubIcon,
  GitlabOriginal as GitlabIcon,
  BitbucketOriginal as BitbucketIcon
} from 'devicons-react'

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: <JavascriptIcon />
    },
    {
      name: 'Html',
      icon: <HtmlIcon />
    },
    {
      name: 'Css',
      icon: <CssIcon />
    },
    {
      name: 'TypeScript',
      icon: <TypescriptIcon />
    },
    {
      name: 'NodeJs',
      icon: <NodejsIcon />
    },
    {
      name: 'ReactJs',
      icon: <ReactIcon />
    },
    { name: 'Redux', icon: <ReduxIcon /> },
    {
      name: 'PHP',
      icon: <PhpIcon />
    },
    { name: '', icon: <CIcon /> },
    { name: 'jQuery', icon: <JqueryIcon /> },
    {
      name: 'Express',
      icon: <ExpressIcon />
    },
    {
      name: 'NestJs',
      icon: <NestjsIcon />
    },
    {
      name: 'GraphQL',
      icon: <GraphqlIcon />
    },
    { name: 'Tailwind', icon: <TailwindIcon /> },
    { name: 'Bootstrap', icon: <BootstrapIcon /> },
    { name: 'PostgreSQL', icon: <PostgresqlIcon /> },
    { name: 'MySQL', icon: <MysqlIcon /> },
    { name: 'RethinkDB', icon: null },
    { name: 'MongoDB', icon: <MongodbIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'GitHub', icon: <GithubIcon /> },
    { name: 'GitLab', icon: <GitlabIcon /> },
    { name: 'BitBucket', icon: <BitbucketIcon /> },
    { name: 'Linux', icon: <LinuxIcon /> }
  ]

  return (
    <section>
      <h5 className='font-bold border-b-1 py-2'>skills & tools</h5>
      <div className='flex flex-wrap gap-1 py-2'>
        {skills?.map(skill => (
          <Badge
            key={skill.name}
            variant='outline'
            className='transition duration-200 cursor-pointer
                 hover:bg-blue-100 hover:border-blue-400
                 dark:hover:bg-blue-800 dark:hover:border-blue-600'>
            {skill.icon} {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills
