import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Photo from '../public/sports_bg.jpeg'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import { capitalize } from '../utils';

const styles = {
    wrapper:`h-48 w-full`,
    mainbox:`relative h-48 w-full overflow-hidden`,
    bg:`z-10 absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-white/5 via-black/20 to-black/100`,
    image:`h-48 w-full object-cover object-top sm:object-center aspect-square cursor-pointer`,
    details:`absolute bottom-6 sm:bottom-0.5 mx-2 flex flex-col justify-center space-y-1 text-white`,
    title:`z-20 my-0 mx-2 text-[0.95em] font-semibold drop-shadow-md shadow-black leading-[1.2em] cursor-pointer`,
    date:`z-20 my-0 mx-2 text-slate-300 text-[0.7em]`
}

interface Props {
  data: Post | undefined
}


function NewsCard01({data:item} : Props) {
  if(!item) return null;
  return (
    <div className={styles.mainbox}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
          <Link href={`/${item?.slug.current}`}>
            { item && <img loading="lazy" src={ urlFor(item?.mainImage).url() } className={styles.image} height={900} /> }
          </Link>
          <div className={styles.details}>
              <Link href={`/${item?.slug.current}`}>
                  <h3 className={styles.title}>{capitalize(item?.title)}</h3>
              </Link>
              <span className={styles.date}>{moment(item?._createdAt).format('LL')}</span>
          </div>
      </div>
    </div>
  )
}

export default NewsCard01