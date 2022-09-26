import React from 'react'
import { Post } from '../typings'
import FeatureMainCapsule from './category/FeatureMainCapsule'
import FeatureSmallCapsule from './category/FeatureSmallCapsule'

interface Props {
  data: [Post],
}

function Features({ data }: Props) {

  var main_data = data?.slice(0,5)
  const item = main_data?.shift();

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
        <FeatureMainCapsule item={item} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 sm:gap-y-8  flex-1">
            <FeatureSmallCapsule data={main_data}/>
        </div>
    </div>
  )
}

export default Features