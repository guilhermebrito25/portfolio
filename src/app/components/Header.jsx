import Image from 'next/image'
import FotoPerfil from '../../../public/assets/123.jpg'


export const Header = () => {
    return (
        <header className='mt-10
        lg:'>
            <h1 className='text-3xl font font-semibold'>Hi i'm Guilherme</h1>
            
            <h2 className='text-lg font-light mt-2 text-zinc-400'>Software Developer
            </h2> 
            
            <div className='mt-2 rounded-full '>
                <Image src={FotoPerfil}/>
            </div>
            
        </header>
    )
}