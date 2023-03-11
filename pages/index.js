import Head from 'next/head'
import StudiesModal from '../components/modals/studiesModal'
import LaboralExpModal from '../components/modals/laboralExpModal'
import PersonalProjectsModal from '../components/modals/personalProjectsModal'
import AboutMeModal from '../components/modals/aboutMeModal'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../public/multilanguage/i18n'
import 'flowbite';
import SettingsBtn from '../components/buttons/settings/settingsBtn'
import Footer from '../components/sections/footer'
import '../public/multilanguage/i18n';
import { Scene } from 'aframe-react'
import Handsfree from 'handsfree'
import Link from 'next/link'

export default function Home() {
  const [t] = useTranslation();


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

    // const handsfree = new Handsfree({
    //   hands: true,

    //   plugin: {
    //     pinchScroll: {
    //       enabled: true,

    //       // Number of frames over the same element before activating that element
    //       framesToFocus: 10,

    //       // Number of pixels the middle and thumb tips must be near each other to drag
    //       threshold: 50,

    //       // Number of frames where a hold is not registered before releasing a drag
    //       numThresholdErrorFrames: 5,

    //       // Speed multiplier
    //       speed: .5
    //     }
    //   }
    // })
    // // Scroll a little slower
    // handsfree.plugin.pinchScroll.enable()
    // handsfree.plugin.pinchScroll.config.speed = 2

    // console.log(handsfree.data.hands.landmarks);
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
        <div data-aos="fade-left" className='flex my-32'>
          <div className="border-2 border-gray-400 dark:border-gray-500 md:w-[45%] w-[90%] md:mx-0 mx-auto px-4 md:px-7 py-5 rounded-lg justify-content BoxShadow text-white font-semibold">
            <h2 className="text-[1.4rem] md:text-[2rem] mb-4">Ver habilidades tecnicas y blandas en VR</h2>
            <p className="text-[.8rem] md:text-[1rem] text-justify"></p>
            <div className="w-full text-right">
              <Link href={"test"}>
                <button className="text-[.8rem] md:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t("know-more")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
