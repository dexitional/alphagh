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



function NewsCover04({ showbiz, politics, tech, lifestyle, sports, business }: any) {

   
   
  const ent_item = showbiz && showbiz[0];
  const ent_items = showbiz && showbiz.shift();
  const pol_item = politics && politics[0];
  const pol_items = politics && politics.shift();
  const int_item = tech && tech[0];
  const int_items = tech && tech.shift();

  const opi_item = lifestyle && lifestyle[0];
  const opi_items = lifestyle && lifestyle.shift();
  const spos_item = sports && sports[0];
  const spos_items = sports && sports.shift();
  const bus_item = business && business[0];
  const bus_items = business && business.shift();

  console.log(tech)

  return (
    <div className={styles.main}>
      {/*JSON.stringify({ showbiz, politics, foreign, opinion, sports, business })*/}
      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Politics</h3>
         <div className={`${styles.box}`}>
            {pol_item && <NewsCard01 data={pol_item} />}
            {pol_items && <NewsCard02 data={pol_items} />}
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Entertainments</h3>
         <div className={`${styles.box}`}>
            {ent_item && <NewsCard01 data={ent_item} />}
            {ent_items && <NewsCard02 data={ent_items} />}
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Sports</h3>
         <div className={`${styles.box}`}>
            {spos_item && <NewsCard01 data={spos_item} />}
            {spos_items && <NewsCard02 data={spos_items} />}
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Technology</h3>
         <div className={`${styles.box}`}>
            {bus_item && <NewsCard01 data={bus_item} />}
            {bus_items && <NewsCard02 data={bus_items} />}
         </div>
      </div>

      <div className={styles.wrapper}>
         <h3 className={styles.heading}>Lifestyle</h3>
         <div className={`${styles.box}`}>
            {int_item && <NewsCard01 data={int_item} />}
            {int_items && <NewsCard02 data={int_items} />}
         </div>
      </div>

      <div className={`${styles.wrapper} hidden`}>
         <h3 className={styles.heading}>Opinions</h3>
         <div className={`${styles.box}`}>
            {opi_item && <NewsCard01 data={opi_item} />}
            {opi_items && <NewsCard02 data={opi_items} />}
         </div>
      </div>
    </div>
  )
}

export default NewsCover04