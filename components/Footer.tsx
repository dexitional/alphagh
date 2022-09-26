import React from 'react'
import Logo from '../public/logo_foot.png';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaSearch } from 'react-icons/fa';
import Link from 'next/link';


interface Props {
  data: any
}

function Footer({ data } : Props) {
  const { socials,menu,site_desc,site_footnote } = data;
  return (
    <footer className="w-full bg-gradient-to-b to-[#102520] between-red-400 from-slate-800 print:hidden">
        <div className="flex flex-col justify-between pt-10">
           {/* <div className="max-w-5xl mx-auto">jj</div> */}
            <div className="max-w-5xl mx-auto md:py-6 flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between space-x-6 text-slate-300">
                <div className="mx-4 flex items-center justify-center border border-[#fcc52d] rounded-full md:rounded-md">
                    {/*<img loading="lazy" className="w-52 object-contain" src={Logo.src} /> */}
                    <div className="px-4 py-0.5 text-xl text-[#102520] font-bold bg-[#fcc52d] rounded-sm">alphagh<span className="text-sm text-yellow-900">.news</span></div>
                </div>
                <div className="max-w-md">
                    <h3 className="text-lg font-bold">ABOUT US</h3>
                    <p className="text-sm py-4">{site_desc}</p>
                </div>
                <div className="max-w-sm">
                    <h3 className="text-lg font-bold">FOLLOW US</h3>
                    <div className="flex items-center space-x-5 py-4 text-[#fcc52d]">
                        {/* SOCIALS */}
                        { socials?.facebookUrl &&<div className="w-8 h-8  flex items-center justify-center border border-[#fcc52d] cursor-pointer rounded-md">
                           <Link href={socials?.facebookUrl}><a target="_blank"><FaFacebookF className="" /></a></Link> 
                       </div> }
                       { socials?.instagramUrl && <div className="w-8 h-8  flex items-center justify-center border border-[#fcc52d] cursor-pointer rounded-md">
                          <Link href={socials?.instagramUrl}><a target="_blank"><FaInstagram className="" /></a></Link> 
                       </div> }
                       { socials?.twitterUrl && <div className="w-8 h-8  flex items-center justify-center border border-[#fcc52d] cursor-pointer rounded-md">
                          <Link href={socials?.twitterUrl}><a target="_blank"><FaTwitter className="" /></a></Link> 
                       </div> }
                       { socials?.youtubeUrl && <div className="w-8 h-8  flex items-center justify-center border border-[#fcc52d] cursor-pointer rounded-md">
                         <Link href={socials?.youtubeUrl}><a target="_blank"><FaYoutube className="" /></a></Link> 
                       </div> }
                    </div>
                </div>
            </div>
            <div className=" bg-[#102520] p-2 shadow-md">
                <div className="max-w-5xl mx-auto text-yellow-200 text-[10px] md:text-xs">{site_footnote}</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer