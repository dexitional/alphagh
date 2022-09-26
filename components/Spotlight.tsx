import React, { useEffect, useState } from 'react'
import Photo from '../public/sports_bg.jpeg'
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import NewsCard01 from './NewsCard01';
import NewsCard02 from './NewsCard02';
import { Post } from '../typings';
import { urlFor } from '../sanity';
import moment from 'moment';
import { capitalize } from '../utils';

const styles = {
    wrapper: `max-w-5xl w-full my-4 flex flex-col sm:flex-row sm:space-x-9 space-y-4 border-b-2 border-red-700 border-dashed`,
    spotlight:`relative w-full sm:w-[67%] sm:h-[400px] overflow-hidden`,
    spotbox: `z-9 w-full h-full overflow-hidden`,
    bg:`z-10 absolute top-0 left-0 right-0 w-full h-full sm:h-[400px] bg-gradient-to-b from-white/5 via-black/10 to-black/100`,
    active_slide:`relative h-[220px] sm:h-[400px] flex flex-1 flex-row bg-slate-300 transition-transform ease-in duration-150 visible cursor-pointer`,
    inactive_slide:`relative h-[220px] sm:h-[400px] flex flex-1 flex-row bg-slate-300  transition-transform ease-out duration-200 hidden cursor-pointer`,
    spotimage:`absolute top-0 left-0 object-cover brightness-1`,
    details:`z-20 absolute bottom-0 left-0 w-full min-h-[100px] pb-2`,
    detailcat:`my-2 mx-6 px-2 py-1 bg-slate-800 text-white text-[10px] font-semibold drop-shadow-lg shadow-black`,
    detailtitle:`mt-2 mx-6 text-sm sm:text-2xl text-white font-normal drop-shadow-lg shadow-black`,
    detaildate:`my-0 mx-6 text-white text-[0.7em] drop-shadow-lg shadow-black`,
    controls:`z-20 absolute top-0 left-0 right-0 w-full h-[150px] sm:h-[400px] flex flex-row items-center justify-between font-bold px-6`,
    next:`cursor-pointer`,
    prev:`cursor-pointer`,
    newsbox: `w-full sm:w-[30%] flex flex-col gap-2 sm:gap-4 pt-2 sm:pt-0 sm:border-0 border-t-2 border-red-300 border-dotted`,
}

interface Props {
   data: [Post];
   recent: [Post];
}


function Spotlight({ data,recent } : Props) {
    
    const [ index,setIndex ] = useState(0);
    var recent_main = recent.slice(0,3)
    const item = recent_main?.shift();
    
    useEffect(() => {
        const ins = setInterval(() => {
          setIndex(Math.min(index+1 == data?.length ? 0:data?.length,index+1))
          //setIndex(Math.abs(index+1) % data?.length)
        },5000)
        return () => {
          clearInterval(ins)
        }
    },[index])

  return (
    <div className={styles.wrapper}>
        
        <div className={styles.spotlight}>
            <div className={styles.bg}></div>
            <div className={styles.controls}>
               <div className={styles.prev} onClick={()=> setIndex(Math.abs(index-1) % data?.length)}><MdOutlineArrowBackIos color="#fff" size={38} /></div>
               <div className={styles.next} onClick={()=> setIndex(Math.abs(index+1) % data?.length)}><MdOutlineArrowForwardIos color="#fff" size={38} /></div>
            </div>

            <div className={styles.spotbox}>
                { data?.map((item,i) => (
                <Link href={`/${item?.slug.current}`} key={i}>
                <div className={`${i === index ? styles.active_slide : styles.inactive_slide}`} key={i}>
                    <img src={urlFor(item?.mainImage).url()} className={styles.spotimage} height={400} width={681} />
                    <div className={styles.details}>
                        <span className={styles.detailcat}>{item?.categories[0]?.title.toUpperCase() }</span>
                        <h2 className={styles.detailtitle}>{item?.title} </h2>
                        <span className={styles.detaildate}>{moment(item?._createdAt).format('LL')}</span>
                    </div>
                </div>
                </Link>
                ))}
                
            </div>
        </div>       
        
        <div className={styles.newsbox}>
            <NewsCard01 data={item} />
            <NewsCard02 data={recent_main} /> 
        </div>

    </div>
  )
}

export default Spotlight