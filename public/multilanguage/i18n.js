import i18n from 'i18next'
import { useEffect } from 'react'
import {
    initReactI18next
} from 'react-i18next'

//Se tiene que actualizar el import cuando se tenga el json
import jsonDocEn from './translations-en.json'
import jsonDocEs from './translations-es.json'

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    //En caso de ser automatico de las configuraciones
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLocale = userLang.substring(0, 2);

    //Se tendra que cambiar conforme al documento json
    const dictEn = jsonDocEn
    const dictEs = jsonDocEs

    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: dictEn
                },
                es: {
                    translation: dictEs
                }
            },
            lng: defaultLocale,
            fallbackLng: 'en',

            interpolation: {
                escapeValue: false
            }
        })
}