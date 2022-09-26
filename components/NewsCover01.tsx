import React from 'react'
import { Post } from '../typings'
import NewsCard01 from './NewsCard01'
import NewsCard02 from './NewsCard02'

const styles = {
    wrapper:``,
    heading:`mb-4 pt-4 pb-2 text-[1.1em] font-semibold outline-0 before:content-[''] before:w-48 before:h-[4px] before:bg-red-300 before:border-b-2 before:border-red-300 border-b-2  border-slate-400/15`,
    cover:`grid grid-cols-3 gap-6`,
    box:`flex flex-col space-y-8`
}

interface Props {
   data: [Post]
}

function NewsCover01() {
  
  return (
    <div className={styles.wrapper}>
       <h3 className={styles.heading}>General News</h3>
       <div className={styles.cover}>
          {/*
           <div className={`${styles.box}`}>
              <NewsCard01 data={} />
              <NewsCard02 data={} />
           </div>
           <div className={`${styles.box}`}>
              <NewsCard01 data={} />
              <NewsCard02 data={} />
           </div>
           <div className={`${styles.box}`}>
              <NewsCard01 data={} />
              <NewsCard02 data={} />
           </div>
          */}
       </div>
      
    </div>
  )
}

export default NewsCover01