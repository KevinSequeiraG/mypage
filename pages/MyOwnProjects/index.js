import Aos from "aos";
import Footer from "../../components/sections/footer";
import Head from "next/head";
import Link from "next/link"
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import SettingsBtn from "../../components/buttons/settings/settingsBtn"
import ProjectByMeCard from "../../components/cards/projectByMeCard"
import ProjectByMeCardDesk from "../../components/cards/ProjectByMeCardDesk";
import PersonalProjectDeskModal from "../../components/modals/personalProjectDeskModal";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"

//import Handsfree from 'handsfree'

const MyOwnProjects = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es
    

    // const handsFreeActive = () => {
    //     const handsfree = new Handsfree({
    //         hands: {
    //             enabled: true,
    //             // The maximum number of hands to detect [0 - 4]
    //             maxNumHands: 2,

    //             // Minimum confidence [0 - 1] for a hand to be considered detected
    //             minDetectionConfidence: 0.5,

    //             // Minimum confidence [0 - 1] for the landmark tracker to be considered detected
    //             // Higher values are more robust at the expense of higher latency
    //             minTrackingConfidence: 0.5
    //         }
    //     })
    //     // Enable plugins tagged with "browser"
    //     handsfree.enablePlugins('browser')
    //     // Start tracking
    //     handsfree.start()
    //     // handsfree.plugin.pinchScroll.enable()
    //     // handsfree.plugin.pinchScroll.config.speed = 2

    //     console.log(handsfree);
    // }


    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    })

    return (
        <>
            <Head>
                <title>Kevin Sequeira Garita</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Kevin Steven Sequeira Garita"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="MyOwnProjects" className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen pt-10 pb-32 relative'>
                <div className="relative ml-5">
                    <Link href={'/'}><button className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button></Link>
                    <SettingsBtn />
                </div>
                <div className="w-full text-center">
                    <h1 className="text-[1.8rem] font-bold text-center italic">{t["projects-made-by-own-learning"]}</h1>
                </div>

                <div className="md:flex md:flex-wrap md:justify-center">

                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/ksgsports" link={"https://ksgsports.netlify.app/"} animation={'zoom-in'} image={"../Images/ksgsports.png"} name={"Página web deportiva"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/covidpage" link={"https://covid19kevin.netlify.app/"} animation={'zoom-in'} image={'../Images/covid.png'} name={"Página web informativa del Covid"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/mycv" link={"https://kevinsequeirag.netlify.app/"} animation={'zoom-in'} image={'../Images/cv.png'} name={"Curriculum online"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/clothingstore" link={"https://frontendstoreksg2.netlify.app/"} animation={'zoom-in'} image={'../Images/tienda1.png'} name={"Visual de tienda sensilla"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/clothingstore2" link={"https://frontendstoreksg.netlify.app/"} animation={'zoom-in'} image={'../Images/tienda2.png'} name={"Tienda de ropa"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/travelblog" link={"https://blogviajesksg.netlify.app/"} animation={'zoom-in'} image={'../Images/viajes.png'} name={"Blog de viajes"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/coffeeblog" link={"https://blogcafeksg.netlify.app/"} animation={'zoom-in'} image={'../Images/cafe.png'} name={"Blog de café"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/realestate" link={"https://bienesraicesksg.netlify.app/"} animation={'zoom-in'} image={'../Images/bienesraices.png'} name={"Página de bienes raíces"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/formDesign" link={"https://freelancerksg.netlify.app/"} animation={'zoom-in'} image={'../Images/formulario.png'} name={"Diseño de formulario"} />
                    <ProjectByMeCard repolink="https://github.com/KevinSequeiraG/xmlLoad" link={"https://xmlloadksg.netlify.app/"} animation={'zoom-in'} image={'../Images/xmlpage.png'} name={"Carga desde XML"} />
                    <ProjectByMeCardDesk galleryImages={["../Images/carrito.png", "../Images/crudProducts.png", "../Images/CrudTable1.png", "../Images/CrudTable2.png", "../Images/CUPON CON DESC.png", "../Images/EstadosMesas.png", "../Images/login.png", "../Images/pagar.png", "../Images/Register.png", "../Images/REPORTE DE VENTAS.png", "../Images/REPORTES POR FECHAS.png", "../Images/REPORTESPORPAGO.png"]} repolink="https://github.com/KevinSequeiraG/koefood" animation={'zoom-in'} image={'../Images/login.png'} name={"KOE App"} />

                    <Footer />
                </div>
                <PersonalProjectDeskModal />
            </div>
        </>
    )
}

export default MyOwnProjects;