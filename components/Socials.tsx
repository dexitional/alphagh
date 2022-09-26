import React from 'react'
import SocialIcon from './SocialIcon'
import { FaFacebookF,FaTwitter,FaWhatsapp,FaLinkedin,FaTelegram, FaEnvelope, FaPrint } from 'react-icons/fa'
import SocialPrint from './SocialPrint'

interface Props {
  title: string;
  slug: string;
}

function Socials({title,slug}: Props) {
  return (
    <div className="my-4 flex space-x-1 print:hidden">
        <SocialIcon Icon={FaFacebookF} className="text-white bg-blue-900 py-3 px-3 w-9 h-9 rounded-sm" link={`https://www.facebook.com/sharer.php?u=${encodeURI('https://dailyupdategh.com/'+slug)}`}/>
        <SocialIcon Icon={FaTwitter} className="text-white bg-blue-400 py-3 px-3 w-9 h-9 rounded-sm" link={`https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURI('https://dailyupdategh.com/'+slug)}`}/>
        <SocialIcon Icon={FaWhatsapp} className="text-white bg-lime-600 py-3 px-3 w-9 h-9 rounded-sm" link={`https://api.whatsapp.com/send?text=${encodeURI(title)}%20%0A%0A%20${encodeURI('https://dailyupdategh.com/'+slug)}`}/>
        <SocialIcon Icon={FaLinkedin} className="text-white bg-sky-700 py-3 px-3 w-9 h-9 rounded-sm" link={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI('https://dailyupdategh.com/'+slug)}&title=${encodeURI(title)}`}/>
        <SocialIcon Icon={FaTelegram} className="text-white bg-sky-500 py-3 px-3 w-9 h-9 rounded-sm" link={`https://telegram.me/share/url?url=${encodeURI('https://dailyupdategh.com/'+slug)}&text=${encodeURI(title)}`}/>
        <SocialIcon Icon={FaEnvelope} className="text-white bg-red-800 py-3 px-3 w-9 h-9 rounded-sm" link={`mailto:?subject=${encodeURI(title)}&body=${encodeURI('https://dailyupdategh.com/'+slug)}`}/>
        <SocialPrint Icon={FaPrint} className="text-white bg-slate-600 py-3 px-3 w-9 h-9 rounded-sm" />
        {/*<SocialIcon />
        <SocialIcon />
  <SocialIcon />*/}
    </div>
  )
}

export default Socials