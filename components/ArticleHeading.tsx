import moment from 'moment'
import React from 'react'

interface Props {
  title: string,
  date: string,
  author: string
}
function ArticleHeading({title,date,author}: Props) {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
         <hr className="md:hidden"/>
         <h1 className="w-full text-2xl md:text-5xl md:leading-[3.4rem] print:text-3xl">{title}</h1>
         <div className="text-slate-600 text-xs text-left">By <span className="font-bold">{author}</span> - {moment(date).format('LL')}</div>
    </div>
   
  )
}

export default ArticleHeading