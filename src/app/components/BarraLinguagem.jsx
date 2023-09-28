import Image from "next/image"


export const BarraLinguagem = ({image1, text}) => {
    return (
        <div className="flex gap-3">


            <Image src={image1} width='30' height='26'/>

            
            <div> 
                <div className="w-64 h-6 rounded-xl border border-zinc-400
                flex justify-start ">
                    
                    <div className="h-full w-20 rounded-xl
                    bg-gradient-to-r from-cyan-500 to-blue-500"> 
                        <p className="ml-4 text-sm">{text}</p> 
                    </div>

                </div>
            </div>



        </div>
    )
}