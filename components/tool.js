import { useTranslation } from "next-i18next";

const Tool = (props) => {
    const { t } = useTranslation();

    return (
        <li className={`bg-[#0E91BB] text-gray-200 border border-gray-500 text-center rounded-lg py-1 px-3 my-2 mx-1`} key={props.key}>{t(props.tool)}</li>
    )
}

export default Tool;