import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
  item: Post | undefined,
}

function FeatureMainCapsule({item}: Props) {
  
  return (
    <div className="relative flex-1 w-full h-64 sm:h-96 group overflow-hidden cursor-pointer">
          <div className="z-20 w-full h-64 sm:h-96 absolute top-0 bg-gradient-to-b from-white/5 via-black/10 to-black/100"></div>
          <Link href={`/${item?.slug.current}`}>
            <a>
              { item?.mainImage && <img className="z-10 w-full h-64 sm:h-96 object-cover object-top hue-rotate-0 group-hover:scale-110 transition-all duration-200 ease-in-out" src={urlFor(item?.mainImage).url()}/> }
              <h3 className="z-20 absolute bottom-12 leading-tight left-4 text-white text-maze font-bold text-xl sm:text-2xl text-left drop-shadow-lg shadow-black">{item?.title}</h3>
            </a>
          </Link>
        <div className="z-20 absolute bottom-4 left-4 text-white font-semibold text-xs text-left drop-shadow-sm shadow-black">{moment(item?._createdAt).format('LL')}</div>
    </div>
  )
}

export default FeatureMainCapsule