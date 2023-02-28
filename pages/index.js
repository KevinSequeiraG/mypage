import Head from 'next/head'
import { Inter } from '@next/font/google'
import StudiesModal from '../components/studiesModal'
import LaboralExpModal from '../components/laboralExpModal'
import PersonalProjectsModal from '../components/personalProjectsModal'
import AboutMeModal from '../components/aboutMeModal'
import Aos from 'aos'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../public/multilanguage/i18n'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t, i18n } = useTranslation();

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
      <nav className='text-right pr-6 pt-5 absolute right-0 z-50'>
        <ul>
          <li>
            <button>
              <span class="material-icons">settings</span>
            </button>
          </li>
        </ul>
        {/* Theme config */}
        <div className='border-2 rounded-xl w-[10rem] h-[8rem] px-3 py-4'>
          <button className='flex items-center mx-auto'>
            <p className='mr-6 text-[1.1rem] '>{t('theme')}</p>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-9 h-5 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-800 !border-0"></div>
            </label>
          </button>
        </div>
        {/* Language config */}
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>

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
              <p className='text-[.7rem] md:text-[1rem]'>{t('professional-description')}</p>
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
