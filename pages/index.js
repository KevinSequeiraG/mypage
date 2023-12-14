import Head from 'next/head'
import StudiesModal from '../components/modals/studiesModal'
import LaboralExpModal from '../components/modals/laboralExpModal'
import PersonalProjectsModal from '../components/modals/personalProjectsModal'
import AboutMeModal from '../components/modals/aboutMeModal'
import Aos from 'aos'
import { useEffect } from 'react'
import 'flowbite';
import SettingsBtn from '../components/buttons/settings/settingsBtn'
import Footer from '../components/sections/footer'
import Handsfree from 'handsfree'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from "../public/multilanguage/translations-en.json"
import es from "../public/multilanguage/translations-es.json"
import SocialButtons from '../components/buttons/social/socialButtons'

export default function Home() {
  const router = useRouter()
  const { locale } = router;
  const t = locale === "en" ? en : es

  useEffect(() => {
    Aos.init({
      duration: 2000
    });

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
    <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white pt-10 pb-32 relative'>
      <Head>
        <title>Kevin Sequeira Garita</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kevin Steven Sequeira Garita"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='absolute top-5'>
        <SettingsBtn />
      </div>


      <div data-aos="fade-up" className='text-white min-h-screen'>
        <div className='mdx1500:flex mdx1000:w-[70%] w-[80%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex align-center w-full'>
            <img alt='My photo' src='/Images/profile.jpg' className='object-cover w-[15rem] mdx1000:w-[20rem] mdx1000:h-[20rem] ProfileImage rounded-full border border-red-500 border-4 border-gray-500 mx-auto'></img>
          </div>
          <div className='float-left mdx1700:ml-7 ml-0 flex flex-col justify-between py-7'>
            <h1 className='text-[1.5rem] mdx1200:text-[4rem] mdx1200:text-left text-center mdx1200:leading-[5rem] mb-6'>Kevin Steven Sequeira Garita</h1>
            <div>
              <p className='mdx1200:text-[2rem]'>{t['job-title']}</p>
              <p className='text-[.7rem] mdx1200:text-[1rem] text-justify font-semibold'>{t['professional-description']}</p>
              <div className='mt-5'>
                <SocialButtons />
                <a href='https://drive.google.com/file/d/1GsSH8fV2QmG-ElFqPvBXOw1F9Im1tRCh/view?usp=sharing' className='border border-gray-400 hover:bg-gray-600 bg-gray-700 px-4 py-2 rounded-[20px]'>{t["cv"]}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='mdx1200:px-[10rem] '>
        <div data-aos="fade-right" className='flex my-32'>
          <PersonalProjectsModal />
        </div>
        <div data-aos="fade-left" className='flex my-32 justify-end'>
          <LaboralExpModal />
        </div>
        <div data-aos="fade-right" className='flex my-32'>
          <AboutMeModal />
        </div>
        <div data-aos="fade-left" className='flex mdx1200:my-32 justify-end'>
          <StudiesModal />
        </div>
        <div data-aos="fade-left" className='flex my-32'>
          <div className="border-2 border-gray-400 dark:border-gray-500 mdx1200:w-[45%] w-[90%] mdx1200:mx-0 mx-auto px-4 mdx1200:px-7 py-5 rounded-lg justify-content BoxShadow text-white font-semibold">
            <h2 className="text-[1.4rem] mdx1200:text-[2rem] mb-4">{t["See-technical-and-soft-skills-in-VR"]}</h2>
            <p className="text-[.8rem] mdx1200:text-[1rem] text-justify"></p>
            <div className="w-full text-right">
              <Link href={"test"}>
                <button className="text-[.8rem] mdx1200:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t["know-more"]}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
