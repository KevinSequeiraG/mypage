import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"
import SocialButtons from "../buttons/social/socialButtons"

const Footer = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es

    return (
        <footer className="text-center pb-4 absolute bottom-0 w-full mdx600:w-auto mdx600:left-[50%] mdx600:translate-x-[-50%]">
            <p className="text-xs">&copy; Copyright 2023 Kevin Steven Sequeira Garita</p>
            <p className="text-xs mb-2">{t["footer-explication"]}<a href="https://github.com/KevinSequeiraG/mypage" target="_blank" rel="noopener noreferrer" className="text-yellow-300"> {t["visit"]}</a></p>
            <SocialButtons />
        </footer>
    )
}

export default Footer
