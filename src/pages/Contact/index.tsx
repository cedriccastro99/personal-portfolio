import { Button } from '@/components/ui/button'
import { GithubIcon, Mail, MapPin } from 'lucide-react'
import { LinkedinPlain, NpmPlain } from 'devicons-react'

const Contact = () => {
  return (
    <section className='space-y-4'>
      <h5 className='text-sm font-semibold tracking-tight border-b pb-2'>
        contact
      </h5>

      <div className='text-sm text-muted-foreground space-y-1 leading-relaxed'>
        <p>I’m open to opportunities and collaborations.</p>

      <p className="flex items-center gap-2">
        <Mail className="w-4 h-4" /> :
        <a
          href="mailto:castro.cedric@outlook.com"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          castro.cedric@outlook.com
        </a>
      </p>

      <p className="flex items-center gap-2">
        <MapPin className="w-4 h-4" /> :
        <span>Based in Cebu, Philippines</span>
      </p>

        <div className='flex items-center justify-center'>
          <ul className='mt-4 flex gap-2'>
            <li>
              <Button
                className='cursor-pointer'
                variant='outline'
                size='sm'
                onClick={() =>
                  window.open('https://github.com/cedriccastro99')
                }>
                <GithubIcon />
              </Button>
            </li>
            <li>
              <Button
                className='cursor-pointer'
                variant='outline'
                size='sm'
                onClick={() =>
                  window.open('https://www.linkedin.com/in/cedric-castro/')
                }>
                <LinkedinPlain />
              </Button>
            </li>
            <li>
              <Button
                className='cursor-pointer'
                variant='outline'
                size='sm'
                onClick={() =>
                  window.open('https://www.npmjs.com/~cedriccastro')
                }>
                <NpmPlain />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
