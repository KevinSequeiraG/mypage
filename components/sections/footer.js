import { useTranslation } from "react-i18next";
import SocialButtons from "../buttons/social/socialButtons"

const Footer = () => {
    const [t] = useTranslation();

    return (
        <footer className="text-center pb-4 absolute bottom-0 lg:left-[50%] lg:translate-x-[-50%]">
            <p className="text-[.7rem]">&copy; Copyright 2023 Kevin Steven Sequeira Garita</p>
            <p className="text-[.7rem] mb-2">{t("footer-explication")}<a href="https://github.com/KevinSequeiraG/mypage" className="text-yellow-300"> {t("visit")}</a></p>
            <SocialButtons />
        </footer>
    )
}

export default Footer