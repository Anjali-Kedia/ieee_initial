import { Card } from '.'

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <div className='w-2/4 pb-10'>
        <h1 className='text-6xl text-primary-turqoise'>We are IEEE Computer Society</h1>
      </div>
      <div className='lg:ml-[31.75rem] md:ml-[20rem] mb-[300px]'>
      <Card/>
      </div>
    </div>
  )
}

export default Hero
