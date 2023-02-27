import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import StudiesModal from '../components/studiesModal'
import LaboralExpModal from '../components/laboralExpModal'
import PersonalProjectsModal from '../components/personalProjectsModal'
import AboutMeModal from '../components/aboutMeModal'
import Aos from 'aos'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])

  return (
    <div className='MainBg text-white'>
      <Head>
        <title>Kevin Sequeira Garita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-aos="fade-up" className='text-white min-h-screen'>
        <div className='md:flex md:w-[70%] w-[80%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex align-center w-full'>
            <img alt='My photo' src='/Images/profile.jpg' className='w-[15rem] md:w-[20rem] md:h-[20rem] ProfileImage rounded-full border border-red-500 border-4 border-gray-500 mx-auto'></img>
          </div>
          <div className='float-left md:ml-7 ml-0 flex flex-col justify-between py-7'>
            <h1 className='text-[1.5rem] md:text-[6rem] md:text-left text-center md:leading-[5rem] mb-6'>Kevin Steven Sequeira Garita</h1>
            <div>
              <p className='md:text-[2rem]'>Ingeniero del Software</p>
              <p className='text-[.7rem] md:text-[1rem]'>Soy un desarrollador con grandes capacidades de desarrollo de software, con la misma facilidad de trabajar en equipo como de trabajar de manera solitaria, además me encanta aprender nuevas tecnologías y esto implica que si debo investigar como hacer alguna tarea, lo haré de una manera profesional.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-[10rem] pb-[10rem]'>
        <div data-aos="fade-left" data-aos-duration="" className='flex md:my-32'>
          <StudiesModal />
        </div>
        <div data-aos="fade-right" className='flex my-32 justify-end'>
          <LaboralExpModal />
        </div>
        <div data-aos="fade-left" className='flex my-32'>
          <PersonalProjectsModal />
        </div>
        <div data-aos="fade-right" className='flex my-32 justify-end'>
          <AboutMeModal />
        </div>
      </div>
    </div>
  )
}
