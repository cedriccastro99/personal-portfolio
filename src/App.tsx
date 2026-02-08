import { Suspense, lazy } from 'react'
import { ThemeFAB } from './components/fab'
import Layout from '@/components/layout/Layout'
import Loading from './components/loading'

// const Projects = lazy(() => import('@/pages/Contact'))
const Contact = lazy(() => import('@/pages/Contact'))
const Experience = lazy(() => import('@/pages/Experience'))
const Home = lazy(() => import('@/pages/Home'))
const Skills = lazy(() => import('@/pages/Skills'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeFAB />
      <Layout>
        <Home />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </Layout>
    </Suspense>
  )
}

export default App