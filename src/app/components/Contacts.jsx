import Image from "next/image"
import ImageLinkdin from "../../../public/assets/icon-linkdin.png"
import ImageGitHub from "../../../public/assets/icon-github.png"


export const Contact = () => {
    return (
        <div className="w-full flex justify-center gap-10 mt-5">

            <div className="rounded-full border border-white p-3">
                <a href="" className=""> <Image src={ImageGitHub}/> </a>
            </div>

            <div className="rounded-full border border-white p-3">
                <a href=""> <Image src={ImageLinkdin}/> </a>
            </div>  

        </div>
    )
}