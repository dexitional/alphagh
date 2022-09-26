import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Post } from '../typings';

const styles = {
    wrapper: ` hidden sm:flex w-full h-6 flex-row items-center sm:mt-6 space-x-4 group`,
    category: `h-5 w-12 px-2 py-1 flex bg-blue-400 group_hover:bg-red-300 text-[0.6em] text-white font-medium items-center justify-center`,
    articles:`h-5 flex flex-1 overflow-hidden items-center`,
    inactive_article:`text-xs transition-all duration-300 ease-out hidden`,
    active_article:`text-xs transition-all duration-200 ease-in visible`,
    controls:`flex flex-row w-30 space-x-2`,
    prev:`w-6 h-6 flex items-center justify-center text-xs text-slate-300 border border-1 border-slate-200 cursor-pointer`,
    next:`w-6 h-6 flex items-center justify-center  text-xs text-slate-300 border border-1 border-slate-200 cursor-pointer`
}

interface Props {
    data: [Post]
}

function BreakNews({data}:Props) {
  
  const [ index,setIndex ] = useState(0);
  
  useEffect(() => {
      const ins = setInterval(() => {
        //setIndex(Math.min(index+1 == data?.length ? 0:data?.length,index+1))
        setIndex(Math.abs(index+1) % data?.length)
        
      },3000)
      return () => {
        clearInterval(ins)
      }
  },[index])
  return (
    <div className={styles.wrapper}>
        <div className={styles.category}>BREAK</div>
        <div className={styles.articles}>
           { data?.map((item,i) => (
               <span key={i} className={`${i === index ? styles.active_article : styles.inactive_article}`}><Link href={`/${item.slug.current}`}>{item.title}</Link></span>
           ))}
           
        </div>
        <div className={styles.controls}>
           <div className={styles.prev} onClick={()=> setIndex(Math.abs(index-1) % data?.length)}>{`<`}</div>
           <div className={styles.next} onClick={()=> setIndex(Math.abs(index+1) % data?.length)}>{`>`}</div>
        </div>
    </div>
  )
}

export default BreakNews