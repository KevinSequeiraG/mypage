import Head from 'next/head'
import { Inter } from '@next/font/google'
import StudiesModal from '../components/modals/studiesModal'
import LaboralExpModal from '../components/modals/laboralExpModal'
import PersonalProjectsModal from '../components/modals/personalProjectsModal'
import AboutMeModal from '../components/modals/aboutMeModal'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import '../public/multilanguage/i18n'
import 'flowbite';
import { useTheme } from 'next-themes'
import SettingsBtn from '../components/buttons/settings/settingsBtn'
import Footer from '../components/sections/footer'

export default function Home() {
  const [t, i18n] = useTranslation();
  const [showSettings, setShowSettings] = useState(false)
  const [firstClick, setFirstClick] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
    setMounted(true)

    console.log(document.getElementById('nav'));
    window.addEventListener('click', function (e) {
      if (document.getElementById('nav').contains(e.target)) {
        // Clicked in box
      } else {
        // Clicked outside the box
        this.document.dispatchEvent(new CustomEvent("CloseSettings"))
      }
    });
  }, [])

  return (
    <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white'>
      <Head>
        <title>Kevin Sequeira Garita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='absolute top-5'>
        <SettingsBtn />
      </div>


      <div data-aos="fade-up" className='text-white min-h-screen'>
        <div className='md:flex md:w-[70%] w-[80%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex align-center w-full'>
            <img alt='My photo' src='/Images/profile.jpg' className='w-[15rem] md:w-[20rem] md:h-[20rem] ProfileImage rounded-full border border-red-500 border-4 border-gray-500 mx-auto'></img>
          </div>
          <div className='float-left md:ml-7 ml-0 flex flex-col justify-between py-7'>
            <h1 className='text-[1.5rem] md:text-[6rem] md:text-left text-center md:leading-[5rem] mb-6'>Kevin Steven Sequeira Garita</h1>
            <div>
              <p className='md:text-[2rem]'>{t("job-title")}</p>
              <p className='text-[.7rem] md:text-[1rem] text-justify font-semibold'>{t('professional-description')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-[10rem] '>
        <div data-aos="fade-left" className='flex md:my-32'>
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

      <Footer />
    </div>
  )
}
