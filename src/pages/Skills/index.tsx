import { Badge } from '@/components/ui/badge'
import {
  BitbucketOriginal as BitbucketIcon,
  BootstrapOriginal as BootstrapIcon,
  COriginal as CIcon,
  Css3Original as CssIcon,
  DockerOriginal as DockerIcon,
  ElasticsearchOriginal as ElasticsearchIcon,
  ExpressOriginal as ExpressIcon,
  GithubOriginal as GithubIcon,
  GitlabOriginal as GitlabIcon,
  GitOriginal as GitIcon,
  GraphqlPlain as GraphqlIcon,
  Html5Original as HtmlIcon,
  JavascriptOriginal as JavascriptIcon,
  JqueryOriginal as JqueryIcon,
  LinuxOriginal as LinuxIcon,
  MongodbOriginal as MongodbIcon,
  MysqlOriginal as MysqlIcon,
  NestjsOriginal as NestjsIcon,
  NodejsOriginal as NodejsIcon,
  PhpOriginal as PhpIcon,
  PostgresqlOriginal as PostgresqlIcon,
  ReactOriginal as ReactIcon,
  ReduxOriginal as ReduxIcon,
  TailwindcssOriginal as TailwindIcon,
  TypescriptOriginal as TypescriptIcon,
} from 'devicons-react'

const RethinkDbIcon = 'https://www.stackhero.io/assets/src/images/servicesLogos/openGraphVersions/rethinkdb.png?e21d717c'

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
    { name: 'RethinkDB', icon: <img src={RethinkDbIcon} alt='RethinkDB' className='w-3.5 h-3.5' /> },
    { name: 'MongoDB', icon: <MongodbIcon /> },
    { name: 'ElasticSearch', icon: <ElasticsearchIcon /> },
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
