
import { ButtonContact } from './components/ButtonContact'
import { CardEducation } from './components/CardEducation'
import { CardExperience } from './components/CardExperience'
import { CardLingua } from './components/CardLingua'
import { CardLinguagens } from './components/CardLinguagens'
import { Contact } from './components/Contacts'
import { Header } from './components/Header'


export default function Home() {
  return (
    <div className=' flex flex-col items-center w-full h-full bg-zinc-900 text-white '> 
      <Header/>
      <Contact/>
      <ButtonContact/>
      <CardExperience/>
      <CardLinguagens/>
      <CardLingua/>
      <CardEducation/>
    </div>
  )
}
