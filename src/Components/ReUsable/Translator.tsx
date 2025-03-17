import { useTranslation } from "react-i18next"

export default function Translator({string}:any) {
    const {t} = useTranslation();
  return (
    t(string)
  )
}
