import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
   data: [Post]
}

function FeedCapsule({data}: Props) {
  return (
    <>
    { data?.map((item,i) => (
    <div className="flex-1 group overflow-hidden mb-4 md:mb-2"> 
       <Link href={`/${item?.slug.current}`}>
        <a className="">
            { item.mainImage && <img  className="z-10 w-full h-32 md:h-40 object-cover object-top hue-rotate-0" src={urlFor(item?.mainImage).url()}/> }
            <h3 className="text-black font-normal text-md md:text-xl text-left pt-1 pb-2 md:py-3 group-hover:text-yellow-400">{item?.title}</h3>
            <div className="-mt-1 text-slate-500 font-normal text-[10px] md:text-xs text-left">{moment(item?._createdAt).format('LL')} </div>
        </a>
       </Link>
    </div>
    ))}
    </>
  )
}

export default FeedCapsule