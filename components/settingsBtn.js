import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { useTheme } from 'next-themes'
import { useTranslation } from "react-i18next";

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

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className='pl-6 pt-2 absolute left-0 z-50'>
            <ul>
                <li>
                    <button onClick={() => { setShowSettings(!showSettings); setFirstClick(true) }}>
                        <span class="material-icons">settings</span>
                    </button>
                </li>
            </ul>
            {firstClick ? <div id='settingsId' className={`overflow-hidden animate__animated ${showSettings ? 'animate__fadeInTopLeft' : 'animate__fadeOutTopLeft'} border-2 rounded-xl px-3 py-4 bg-black bg-opacity-80 overflow-x-hidden`}>
                {/* Theme config */}
                <button className='flex mx-auto' >
                    <p className='mr-5 text-[1.1rem] '>{t('theme')}</p>
                    {renderTheme()}
                </button>

                {/* Language config */}
                <div className='justify-center mt-2 !overflow-hidden h-auto'>
                    <Dropdown onClick={() => { document.getElementById("settingsId").classList.contains("h-[13rem]") ? document.getElementById("settingsId").classList.remove("h-[13rem]") : document.getElementById("settingsId").classList.add("h-[13rem]") }} class={"!bg-blue-800 rounded-xl !text-white z-50 h-auto"} label={t("language")}>
                        <Dropdown.Item onClick={() => { ChooseLng("en"); document.getElementById("settingsId").classList.remove("h-[13rem]") }}>
                            English
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => { ChooseLng("es"); document.getElementById("settingsId").classList.remove("h-[13rem]") }}>
                            Español
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div> : null}
        </nav>
    )
}

export default SettingsBtn;