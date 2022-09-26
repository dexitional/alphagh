import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import {blockContentToPlainText} from 'react-portable-text'
import Photo from '../public/sports_bg.jpeg'
import { urlFor } from '../sanity'
import { Post } from '../typings'

const styles = {
    wrapper:`w-full`,
    cover:`w-full`,
    image:`cursor-pointer object-cover w-full h-64`,
    details:`my-2 text-black/90`,
    title:`my-0 text-xl font-medium leading-[1.4em] cursor-pointer`,
    date:`my-0 text-black/50 font-medium text-[0.7em]`,
    note:`my-2 text-black/50 font-normal text-[0.9em] tuncate`
}

interface Props {
  data: Post | undefined
}

function NewsCard03({data:item}:Props) {
  return (
    <div className={styles.wrapper}>

      <div className={styles.cover}>
        <Link href={`/${item?.slug.current}`}>
          { item && item.mainImage && <img className={styles.image} src={urlFor(item?.mainImage).url()} height={400} loading="lazy" /> }
        </Link>
        <div className={styles.details}>
          <Link href={`/${item?.slug.current}`}>
            <h3 className={styles.title}>{item?.title}</h3>
          </Link>
          <span className={styles.date}>{moment(item?._createdAt).format('LL')}</span>
          <p className={styles.note}>{blockContentToPlainText(item?.body).substr(0,135)+' ...'}</p>
        </div>
      </div>

    </div>
  )
}

export default NewsCard03