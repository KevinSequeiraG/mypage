import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { useTheme } from 'next-themes'
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SocialButtons from "../social/socialButtons";

const SettingsBtn = () => {
    const [t, i18n] = useTranslation();
    const [firstClick, setFirstClick] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    const renderTheme = () => {
        if (!mounted) {
            return null;
        }
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme == "dark") {
            return (
                <button onClick={() => { setTheme('light'); setShowSettings(false) }} className='flex mx-auto' >
                    <p className='mr-5 text-[1.1rem] '>{t('theme')}</p>
                    <p>
                        <span className="material-icons">dark_mode</span>
                    </p>
                </button>)
        } else {
            return (
                <button onClick={() => { setTheme('dark'); setShowSettings(false) }} className='flex mx-auto' >
                    <p className='mr-5 text-[1.1rem] '>{t('theme')}</p>
                    <p className="w-7 h-7">
                        <span className="material-icons">light_mode</span>
                    </p>
                </button>)
        }
    }

    useEffect(() => {
        setMounted(true)
        document.addEventListener("CloseSettings", () => setShowSettings(false))
    }, [])

    return (
        <div id="nav" className='pl-8 pt-2 absolute left-0 z-50'>
            <ul>
                <li>
                    <button onClick={() => { setShowSettings(!showSettings); setFirstClick(true) }}>
                        <span className="material-icons">settings</span>
                    </button>
                </li>
            </ul>
            {firstClick ? <div id='settingsId' className={`overflow-hidden animate__animated ${showSettings ? 'animate__fadeInTopLeft' : 'animate__fadeOutTopLeft'} border-2 rounded-xl px-3 py-4 bg-black bg-opacity-80 overflow-x-hidden`}>
                {/* Theme config */}
                {renderTheme()}

                {/* Language config */}
                <div className='justify-center mt-2 !overflow-hidden h-auto'>
                    <Dropdown onClick={() => { document.getElementById("settingsId").classList.contains("h-[13rem]") ? document.getElementById("settingsId").classList.remove("h-[13rem]") : document.getElementById("settingsId").classList.add("h-[13rem]") }} className={"!bg-blue-800 rounded-xl !text-white z-50 h-auto"} label={t("language")}>
                        <Dropdown.Item className="!text-white hover:bg-gray-600" onClick={() => {document.getElementById("settingsId").classList.remove("h-[13rem]") }}>
                            <Link href={""} locale="en">
                                English
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="!text-white hover:bg-gray-600" onClick={() => {document.getElementById("settingsId").classList.remove("h-[13rem]") }}>
                            <Link href={""} locale="es">
                                Español
                            </Link>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div> : null}
        </div>
    )
}

export default SettingsBtn;