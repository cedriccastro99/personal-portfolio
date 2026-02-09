const Contact = () => {
  return (
    <section>
      <h5 className='font-bold border-b-1 py-2 pb-2 mb-4'>contact</h5>
      <div className='space-y-2 text-sm text-muted-foreground'>
        <p>I’m open to opportunities and collaborations.</p>

        <p>
          You can reach me at{' '}
          <a
            href='mailto:castro.cedric@outlook.com'
            className='underline underline-offset-4 hover:text-foreground transition-colors'>
            castro.cedric@outlook.com
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
