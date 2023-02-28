import Head from 'next/head'
import { Inter } from '@next/font/google'
import StudiesModal from '../components/studiesModal'
import LaboralExpModal from '../components/laboralExpModal'
import PersonalProjectsModal from '../components/personalProjectsModal'
import AboutMeModal from '../components/aboutMeModal'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown } from "flowbite-react";
import '../public/multilanguage/i18n'
import 'flowbite';
import { useTheme } from 'next-themes'

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
  }, [])

  const renderTheme = () => {
    if (!mounted) {
      return null;
    }
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme == "dark") {
      return (<button onClick={() => { setTheme('light') }} ><span class="material-icons">dark_mode</span></button>)
    } else {
      return (<button className="w-7 h-7" onClick={() => { setTheme('dark') }} ><span class="material-icons">light_mode</span></button>)
    }
  }

  const ChooseLng = (lng) => {
    setTimeout(() => {
      i18n.changeLanguage(lng);
    }, 250);
  }

  const ChangeTheme = () => {
    theme == "dark" ? setTheme("") : setTheme("dark")
    window.localStorage.setItem("color-theme", theme)
  }

  useEffect(() => {
    console.log("object", window.localStorage.getItem('color-theme'));
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white'>
      <Head>
        <title>Kevin Sequeira Garita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='pl-6 pt-5 absolute left-0 z-50'>
        <ul>
          <li>
            <button onClick={() => { setShowSettings(!showSettings); setFirstClick(true) }}>
              <span class="material-icons">settings</span>
            </button>
          </li>
        </ul>

        {firstClick ? <div className={`animate__animated ${showSettings ? 'animate__fadeInTopLeft' : 'animate__fadeOutTopLeft'} border-2 rounded-xl px-3 py-4 bg-black bg-opacity-80 overflow-x-hidden`}>
          <div className='flex justify-between items-center'>
          
          </div>
          {/* Theme config */}
          <button className='flex mx-auto' onClick={() => ChangeTheme}>
            <p className='mr-5 text-[1.1rem] '>{t('theme')}</p>
            {renderTheme()}
          </button>

          {/* Language config */}
          <div className='flex justify-center mt-2'>
            <Dropdown class={"!bg-blue-800 rounded-xl !text-white"} label={t("language")}>
              <Dropdown.Item onClick={() => { ChooseLng("en") }}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { ChooseLng("es") }}>
                Español
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div> : null}

      </nav>
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
      <div className='md:px-[10rem] pb-[10rem]'>
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
    </div>
  )
}
