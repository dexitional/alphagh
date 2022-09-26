import Link from 'next/link'
import React from 'react'
import { Post } from '../typings'

interface Props {
  post:Post
}

function Breadcrump({post}:Props) {

  const cat = post?.categories[0].title
  return (
    <div className="w-full max-w-5xl my-3 py-3 px-2 text-xs mx-auto items-start justify-evenly print:hidden">
      <Link href="">
          <a className="pl-2 text-slate-400 after:content-['>'] after:text-slate-400 after:pl-2 after:text-[10px]">Home</a>
      </Link> 
      {/*
      <Link href="">
          <a className="pl-2 text-slate-400 after:content-['>'] after:text-slate-400 after:pl-2 after:text-[10px]">{cat} </a>
      </Link>
      */}
      <span className="pl-2 text-slate-400">{post?.title}</span>
    </div>
  )
}

export default Breadcrump