import Link from 'next/link'
import React from 'react'
import { Post } from '../../typings'

interface Props {
   data: [Post] | undefined
}

function RecentPost({data}:Props) {
  return (
    <div className="relative">
        <h3 className="py-4 text-[1.1em] font-semibold outline-0 before:content-[''] before:w-full before:h-[2px] before:bg-red-500 before:absolute before:top-[50px] before:left-0">
            Recent Posts
        </h3>
        <ul className="list-outside">
            { data?.map((item,i) => (
            <li key={i} className="py-2 border-0 border-b-[1px] border-dashed ">
                <Link href={`/${item?.slug.current}`}>
                    <a className="text-sm font-medium leading-1 hover:text-yellow-600">{item.title}</a>
                </Link>
            </li>
            )) || (<h3>No recent posts.</h3>)}
            
        </ul>
    </div>
  )
}

export default RecentPost