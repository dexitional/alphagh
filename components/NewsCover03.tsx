import React from 'react'
import NewsCard01 from './NewsCard01'
import NewsCard02 from './NewsCard02'
import Photo from '../public/sports_bg.jpeg'
import NewsCard03 from './NewsCard03'
import { Post } from '../typings'


const styles = {
    wrapper:``,
    heading:`mb-4 pt-4 pb-2 text-[1.1em] font-semibold outline-0 before:content-[''] before:w-48 before:h-[4px] before:bg-red-300 before:border-b-2 before:border-red-300 border-b-2  border-slate-400/15`,
    cover:`grid grid-cols-1 sm:grid-cols-3 gap-6`,
    box:`flex flex-col space-y-8 sm:border-0 border-b-2 border-red-300 border-dotted`,
    ads:`flex flex-col h-auto`,
    image:`h-48 w-full object-cover`

}

interface Props {
   data: [Post]
}

function NewsCover03({ data } : Props) {
  
  var main_data = data && [...data];
  //const item = main_data && main_data[0];
  //const items = main_data?.shift();

  var items = data?.slice(0,6)
  const item = items?.shift();
  
  if(!data) return null;
  return (
    <div className={styles.wrapper}>
       <h3 className={styles.heading}>Top News</h3>
       <div className={styles.cover}>
           {item &&
           <div className={`${styles.box}`}>
              <NewsCard03 data={item} />
           </div>
           }
           {items &&
           <div className={`${styles.box}`}>
              <NewsCard02 data={items}/>
           </div>
            }
           <div className={styles.ads}>
              <img src={Photo.src}  className={styles.image}  />
           </div>
       </div>
      
    </div>
  )
}

export default NewsCover03