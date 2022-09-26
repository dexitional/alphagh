
import Icon from './SocialIcon'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaSearch } from 'react-icons/fa';
import { IoLogoYoutube,IoMdMenu,IoMdSearch } from 'react-icons/io';
import { CgCloseR } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import Logo from '../public/logo.jpg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Post } from '../typings';
import moment from 'moment';
import { useEffect,useState } from 'react';

interface Props {
  data: any,
  post: Post | null
}

function Header({ data,post } : Props) {

  const [ open, setOpen ] = useState(false);
  const { socials,ads,menu } = data;
  const router = useRouter()
  const route = post?.categories[0].title ||  router.query?.slug;
  const cat = post?.title;
  //console.log(cat,route);
  const styles = {
    active: `py-1 px-2 bg-orange-400 rounded-md drop-shadow-lg text-red-900 text-xl border-0 cursor-default`,
    inactive: `p-2 px-2 border-0 hover:bg-[#fcc52d]/40 hover:text-[#102520] cursor-pointer transition-all hover:ease-out-in`
  }

  const goTo = (link: string ) => {
       setOpen(!open);
       router.push(link);
  }

  useEffect(() => {

  },[])
  
  return (
    <header className="flex flex-col print:hidden z-30">
      {/* Top Bar */}
      <div className="hidden w-full bg-white"> 
        <div className="container w-full md:max-w-5xl md:mx-auto py-6 flex items-center justify-center">
          <Link href="#" className="shrink-0">
            <img loading="lazy" className="h-24 object-contain" src={ Logo.src }/>
            {/*<span>ALPHAGH.NEWS</span>*/}
          </Link>
          <div className="md:flex-1 ml-20">
            <div className="py-4 px-6">
             {
              ads?.filter((r: { type: string; location: string; visible: boolean; }) => r.type === 'image' && r.location === 'header' && r.visible === true).map((ad:{path:string}) => (
                <img key={ad.path} loading="lazy" src={ad.path} className="w-50 object-cover"/>
              )) 
               /*
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-7243897918486921"
                  data-ad-slot="776****95"
                  data-ad-format="auto"
                  data-full-width-responsive="true"/>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});    
                </script>
                */
              }

            </div>
          </div>
        </div>
      </div>
      

      {/* Menu Bar */}
      <nav className=" w-full bg-[#102520] border-0 border-b-2 border-gray-200">
          <div className="hidden w-full h-12 md:max-w-5xl md:my-4 mx-auto md:flex justify-between items-center">
            {/* Logo */}
            {/*<div className="px-4 py-0.5 text-xl text-[#102520] font-bold bg-[#fcc52d] rounded-sm">alphagh<span className="text-sm text-yellow-900">.news</span></div>*/}
            <Link href="/" className="shrink-0">
            <img loading="lazy" className="h-20 object-contain" src={ Logo.src }/>
            </Link>
            {/* Main Navigation */}
            <ul className="flex items-center text-white font-bold text-sm">
                <li><Link href="/"><span className={'' == route?.toString().trim() ? styles.active : styles.inactive}>HOME</span></Link></li>  
                { menu?.filter((r: { visible: boolean; }) => r.visible === true).map((row : { title:string,slug:string;link:string }) => (
                   <li key={row.slug}><Link href={row.link}><span className={ (row.slug == route ||  post?.categories[0].slug == row.slug) ? styles.active : styles.inactive}>{row.title && row.title.toUpperCase()}</span></Link></li>  
                ))}
            </ul>
            {/* Socials */}
            <div className="flex items-center space-x-3 md-space-x-5 text-[#fcc52d]">
                {/* Icons */}
                { socials?.facebookUrl && <Link href={socials?.facebookUrl}><a target="_blank"><FaFacebookF className="w-3 h-3 cursor-pointer hover:text-blue-900"/></a></Link> }
                { socials?.instagramUrl && <Link href={socials?.instagramUrl}><a target="_blank"><FaInstagram className="w-4 h-4 cursor-pointer hover:text-blue-800"/></a></Link>}
                { socials?.twitterUrl && <Link href={socials?.twitterUrl}><a target="_blank"><FaTwitter className="w-4 h-4 cursor-pointer hover:text-blue-400"/></a></Link>}
                { socials?.youtubeUrl && <Link href={socials?.youtubeUrl}><a target="_blank"><IoLogoYoutube className="w-4 h-4 cursor-pointer hover:text-red-900"/></a></Link>}
            </div>
            {/* SearchBar */}
            <div className="hidden items-center space-x-4">
              <span className="text-white font-bold hidden">
                <TbSearch className="w-5 h-5 cursor-pointer font-extrabold"/>
              </span>
              <div className="flex -space-x-1 shadow-md">
                <input className="bg-orange-400 py-1 px-3 text-white rounded-md placeholder:text-white placeholder:font-small outline-none" type="search" name="search" placeholder="Search Keyword ..." />
                <button className="bg-slate-800 p-1 px-2 text-white font-Semibold rounded-tr-md rounded-br-md" type="submit">Search</button>
              </div>
            </div>
          </div>
          {/* Mobile Navbar */}
          <div className="md:hidden w-full h-14 px-4 flex justify-between items-center bg-gradient-to-b from-bg-[#102520] to-green-900">
            <IoMdMenu onClick={()=> setOpen(!open)} className="h-8 w-8 p-1 bg-white/20 text-white"/>
            <Link href="#" className="shrink-0">
              <img loading="lazy" className="h-8 object-contain rounded-lg shadow-md shadow-[#102520]" src={ Logo.src }/>
            </Link>
            <IoMdSearch className="h-8 w-8 p-1 rounded-md bg-white/20 text-white"/>
          </div>
          
       </nav>
       
       {/* Mobile Navigation */}
       <div className={`${open ? 'visible':'hidden'} z-30 fixed top-0 left-0 w-full h-auto bg-[#102520]/80 p-4`}>
            <div>
                 <CgCloseR onClick={()=> setOpen(!open)} className="h-8 w-8 p-0.5 rounded-md bg-black/40 text-yellow-300" />
            </div>
            <div className="z-50 my-4 flex flex-col space-y-4 divider divide-[#102520]">
              <h3 onClick={(e)=> goTo('/')} className="text-lg font-bold text-yellow-300">HOME</h3>
                { menu?.filter((r: { visible: boolean; }) => r.visible === true).map((row : { title:string,slug:string;link:string }) => (
                <h3 key={row.slug} onClick={()=> goTo(row.link)}  className="text-lg font-bold text-yellow-300">{row.title && row.title.toUpperCase()}</h3>
                ))}
            </div>
       </div>
    </header>
    
  )
}

export default Header