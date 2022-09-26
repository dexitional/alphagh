import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import Photo from '../public/sports_bg.jpeg'

interface Props {
  data: any,
}
function FeatureSmallCapsule({data}: Props) {
  return (
    <>
      { data?.map((item: { slug: { current: any }; mainImage: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined },i: React.Key | null | undefined) => (
        <div key={i} className="relative w-full h-40 sm:h-44 group overflow-hidden cursor-pointer">
            <div className="z-20 w-full h-40 sm:h-44 absolute top-0 overflow-hidden bg-gradient-to-b from-white/5 via-black/10 to-black/100"></div>
            <Link href={`/${item?.slug.current}`}>
              <a>
                <img className="z-10 w-full sm:h-44 object-cover object-top group-hover:scale-110 transition-all duration-200 ease-in-out" src={urlFor(item?.mainImage).url()}/>
                <h3 className="z-30 absolute bottom-3 left-4 leading-tight text-white text-sm font-bold text-left drop-shadow-md shadow-black">{item?.title}</h3>
              </a>
            </Link>
        </div>
      ))}
    </>
  )
}

export default FeatureSmallCapsule
