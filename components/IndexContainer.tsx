import React from 'react'
import { Post } from '../typings'
import BreakNews from './BreakNews'
import NewsCover01 from './NewsCover01'
import NewsCover02 from './NewsCover02'
import NewsCover03 from './NewsCover03'
import NewsCover04 from './NewsCover04'
import Spotlight from './Spotlight'

interface Props {
  data: any,
}

function IndexContainer({data}:Props) {
  const styles = {
    wrapper: `max-w-5xl w-full mx-auto flex flex-col px-3`,
  }

  return (
     <div className={styles.wrapper}>
        <BreakNews data={data?.break} />
        {/**/}
        <Spotlight data={data?.top} recent={data?.recent} />
        <NewsCover03 data={data?.top} />
        {/*
        <NewsCover01 />
        <NewsCover02 />
       
        <NewsCover04 entertainment={data?.entertainment} politics={data?.politics} history={data?.history} />
        */}
     </div>
  )
}

export default IndexContainer