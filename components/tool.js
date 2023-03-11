import { useRouter } from 'next/router'
import en from "../public/multilanguage/translations-en.json"
import es from "../public/multilanguage/translations-es.json"

const Tool = (props) => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es

    return (
        <li className={`bg-[#0E91BB] text-gray-200 border border-gray-500 text-center rounded-lg py-1 px-3 my-2 mx-1`} key={props.key}>{props.skill?t[props.skill]:props.tool}</li>
    )
}

export default Tool;