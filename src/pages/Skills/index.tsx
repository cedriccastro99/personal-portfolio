import { Badge } from '@/components/ui/badge'
import RethinkDbIcon from '@/assets/png/rethinkdb_icon.png'
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
  TypescriptOriginal as TypescriptIcon
} from 'devicons-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <HtmlIcon /> },
        { name: 'CSS', icon: <CssIcon /> },
        { name: 'JavaScript', icon: <JavascriptIcon /> },
        { name: 'TypeScript', icon: <TypescriptIcon /> },
        { name: 'ReactJs', icon: <ReactIcon /> },
        { name: 'Redux', icon: <ReduxIcon /> },
        { name: 'jQuery', icon: <JqueryIcon /> },
        { name: 'Tailwind', icon: <TailwindIcon /> },
        { name: 'Bootstrap', icon: <BootstrapIcon /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'NodeJs', icon: <NodejsIcon /> },
        { name: 'Express', icon: <ExpressIcon /> },
        { name: 'NestJs', icon: <NestjsIcon /> },
        { name: 'PHP', icon: <PhpIcon /> },
        { name: 'GraphQL', icon: <GraphqlIcon /> }
      ]
    },
    {
      title: 'Databases & Search',
      skills: [
        { name: 'PostgreSQL', icon: <PostgresqlIcon /> },
        { name: 'MySQL', icon: <MysqlIcon /> },
        { name: 'MongoDB', icon: <MongodbIcon /> },
        {
          name: 'RethinkDB',
          icon: <img src={RethinkDbIcon} className='w-3.5 h-3.5' />
        },
        { name: 'ElasticSearch', icon: <ElasticsearchIcon /> }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', icon: <DockerIcon /> },
        { name: 'Linux', icon: <LinuxIcon /> }
      ]
    },
    {
      title: 'Version Control',
      skills: [
        { name: 'Git', icon: <GitIcon /> },
        { name: 'GitHub', icon: <GithubIcon /> },
        { name: 'GitLab', icon: <GitlabIcon /> },
        { name: 'BitBucket', icon: <BitbucketIcon /> }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: '', icon: <CIcon /> },
        { name: 'JavaScript', icon: <JavascriptIcon /> },
        { name: 'TypeScript', icon: <TypescriptIcon /> },
        { name: 'PHP', icon: <PhpIcon /> }
      ]
    }
  ]

  return (
    <section className='w-full'>
      <h5 className='font-bold border-b py-2'>skills & tools</h5>

      <div
        className='grid gap-4 py-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {skillCategories.map(category => (
          <div
            key={category.title}
            className='border rounded-xl p-3 bg-muted/30'>
            <h6 className='text-sm font-semibold mb-2'>{category.title}</h6>

            <div className='flex flex-wrap gap-1'>
              {category.skills.map(skill => (
                <Badge
                  key={skill.name}
                  variant='outline'
                  className='flex items-center gap-1 transition duration-200 cursor-pointer hover:bg-blue-100 hover:border-blue-400 dark:hover:bg-blue-800 dark:hover:border-blue-600'>
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
