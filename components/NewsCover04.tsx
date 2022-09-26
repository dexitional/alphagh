import React from 'react'
import NewsCard01 from './NewsCard01'
import NewsCard02 from './NewsCard02'

const styles = {
    main:`my-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-6`,
    wrapper:``,
    heading:`mb-4 pt-4 pb-2 text-[1.1em] font-semibold outline-0 before:content-[''] before:w-48 before:h-[4px] before:bg-red-300 before:border-b-2 before:border-red-300 border-b-2  border-slate-400/15`,
    cover:`grid grid-cols-3 gap-6`,
    box:`flex flex-col space-y-8`
}



function NewsCover04({ entertainment, politics, sports }: any) {
   
  const ent_item = entertainment[0];
  const ent_items = entertainment.shift();
  const pol_item = politics[0];
  const pol_items = politics.shift();
  const his_item = sports[0];
  const his_items = sports.shift();

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Entertainments</h3>
         <div className={`${styles.box}`}>
            <NewsCard01 data={ent_item} />
            <NewsCard02 data={ent_items} />
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Politics</h3>
         <div className={`${styles.box}`}>
            <NewsCard01 data={pol_item} />
            <NewsCard02 data={pol_items} />
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Sports</h3>
         <div className={`${styles.box}`}>
            <NewsCard01 data={his_item} />
            <NewsCard02 data={his_items} />
         </div>
      </div>
    </div>
  )
}

export default NewsCover04