import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import Photo from '../public/sports_bg.jpeg'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import { capitalize } from '../utils';

const styles = {
    wrapper:`w-full`,
    cover:`w-full pb-4 flex flex-row`,
    image:`cursor-pointer object-cover h-20`,
    details:`flex flex-1 flex-col space-y-1 text-black/90`,
    title:`my-0 mx-2 text-sm font-medium leading-[1.4em] cursor-pointer`,
    date:`my-0 mx-2 text-black/50 font-medium text-[0.7em]`
}

interface Props {
  data: any
}

function NewsCard02({data:items}: Props) {

  
  return (
    <div className={styles.wrapper}>
    { items.length  && items?.map(( item:Post, i:React.Key ) => 
      <div key={i} className={styles.cover}>
        <Link href={`/${item.slug.current}`}>
          <img className={styles.image} src={ urlFor(item?.mainImage).url() } height={65} width={100} loading="lazy" />
        </Link>
        <div className={styles.details}>
          <Link href={`/${item.slug.current}`}>
            <h3 className={styles.title}>{item.title.substr(0,60)+' ...'}</h3>
          </Link>
          <span className={styles.date}>{moment(item?._createdAt).format('LL')}</span>
        </div>
      </div>
    )}
    </div>
  )
}

export default NewsCard02