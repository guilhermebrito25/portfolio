import Image from "next/image"
import IconEmail from "../../../public/assets/icon-email.png"

export const ButtonContact = () => {
    return (
        <button className="flex rounded-3xl py-2 px-16 mt-5 font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
            CONTACT ME <Image src={IconEmail} className="ml-2"/>
        </button>
    )
}