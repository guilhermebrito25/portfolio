import { BarraLinguagem } from "./BarraLinguagem"
import ReactIcon from "../../../public/assets/react-icon.png"
import TsIcon from "../../../public/assets/ts-icon.png"
import JsIcon from "../../../public/assets/js-icon.png"



export const CardLinguagens = () => {
    return (
        <div className="w-80 flex flex-col justify-center items-center mt-8 gap-5">
            <BarraLinguagem image1={ReactIcon} text='1 ano' />
            <BarraLinguagem image1={JsIcon} text='1 ano' />
            <BarraLinguagem image1={TsIcon} text='1 ano' />
        </div>
    )
}